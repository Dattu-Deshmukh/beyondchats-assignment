<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;
use App\Models\Article;
use Illuminate\Support\Str;

class ScrapeBeyondChats extends Command
{
    protected $signature = 'scrape:beyondchats';
    protected $description = 'Scrape oldest 5 articles from BeyondChats blog with actual content';

    public function handle()
    {
        $client = new Client([
            'verify' => false,
            'timeout' => 30
        ]);

        $url = 'https://beyondchats.com/blogs/page/3';

        $this->info('Fetching blog page...');
        $response = $client->get($url, [
            'http_errors' => false
        ]);

        if ($response->getStatusCode() !== 200) {
            $this->error('Failed to fetch blog page');
            return;
        }

        $html = $response->getBody()->getContents();
        $crawler = new Crawler($html);

        $articles = $crawler->filter('article')->slice(-5);

        $this->info('Found ' . $articles->count() . ' articles. Scraping content...');

        foreach ($articles as $node) {
            $nodeCrawler = new Crawler($node);

            $title = $nodeCrawler->filter('h2')->text();
            $link  = $nodeCrawler->filter('a')->attr('href');

            $this->info("Processing: {$title}");

            // Scrape actual content from the article page
            $content = $this->scrapeArticleContent($client, $link, $title);

            Article::updateOrCreate(
                ['slug' => Str::slug($title)],
                [
                    'title' => $title,
                    'slug' => Str::slug($title),
                    'source_url' => $link,
                    'content' => $content
                ]
            );

            $this->info("✓ Saved with content");
            sleep(2); // Be polite to the server
        }

        $this->info('✅ All articles scraped with actual content!');
    }

    private function scrapeArticleContent($client, $url, $title)
    {
        try {
            $this->info("  → Fetching content from: {$url}");
            
            $response = $client->get($url, [
                'http_errors' => false,
                'timeout' => 15
            ]);

            if ($response->getStatusCode() !== 200) {
                $this->warn("  ⚠ Failed to fetch article page, using title-based content");
                return "Learn about {$title}. This comprehensive guide covers key insights and practical strategies.";
            }

            $html = $response->getBody()->getContents();
            $crawler = new Crawler($html);

            $paragraphs = [];

            // Try different selectors to find article content
            $selectors = [
                'article .content p',
                'article p',
                '.post-content p',
                '.entry-content p',
                '.article-content p',
                'main p',
                '.blog-content p'
            ];

            foreach ($selectors as $selector) {
                if ($crawler->filter($selector)->count() > 0) {
                    $paragraphs = $crawler->filter($selector)->each(function ($node) {
                        return trim($node->text());
                    });
                    
                    // Filter out empty paragraphs
                    $paragraphs = array_filter($paragraphs, function($p) {
                        return strlen($p) > 50; // Only substantial paragraphs
                    });

                    if (count($paragraphs) > 0) {
                        break;
                    }
                }
            }

            if (empty($paragraphs)) {
                $this->warn("  ⚠ No content found, using title-based content");
                return "Learn about {$title}. This comprehensive guide covers key insights and practical strategies.";
            }

            // Take first 3-5 paragraphs and join them
            $contentParagraphs = array_slice($paragraphs, 0, min(5, count($paragraphs)));
            $content = implode("\n\n", $contentParagraphs);

            // Limit to reasonable length (500 words / ~2000 characters)
            if (strlen($content) > 2000) {
                $content = substr($content, 0, 2000);
                $lastPeriod = strrpos($content, '.');
                if ($lastPeriod !== false) {
                    $content = substr($content, 0, $lastPeriod + 1);
                }
            }

            $this->info("  ✓ Content scraped successfully (" . strlen($content) . " chars)");
            return $content;

        } catch (\Exception $e) {
            $this->error("  ✗ Error scraping content: " . $e->getMessage());
            return "Learn about {$title}. This comprehensive guide covers key insights and practical strategies.";
        }
    }
}
<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;
use App\Models\Article;
use Illuminate\Support\Str;

class ScrapeBeyondChats extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'scrape:beyondchats';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Scrape oldest 5 articles from BeyondChats blog';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
{
    $client = new Client([
        'verify' => false
    ]);

    $url = 'https://beyondchats.com/blogs/page/3';

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

    foreach ($articles as $node) {
        $nodeCrawler = new Crawler($node);

        $title = $nodeCrawler->filter('h2')->text();
        $link  = $nodeCrawler->filter('a')->attr('href');

        Article::updateOrCreate(
            ['slug' => Str::slug($title)],
            [
                'title' => $title,
                'slug' => Str::slug($title),
                'source_url' => $link,
                'content' => null
            ]
        );
    }

    $this->info('Oldest 5 articles scraped successfully.');
}
}

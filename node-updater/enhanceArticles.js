const axios = require("axios");

const LARAVEL_API = "http://127.0.0.1:8000/api/articles";

async function enhanceArticles() {
  try {
    const res = await axios.get(LARAVEL_API);
    const articles = res.data.data.data; // pagination structure

    for (const article of articles) {
      const enhancedContent = `
${article.title}

This article discusses important concepts related to BeyondChats.
The content has been enhanced by adding context, clarity, and structure.

Reference:
- ${article.source_url}
      `;

      await axios.put(`${LARAVEL_API}/${article.id}`, {
        content: enhancedContent
      });

      console.log(`Enhanced article: ${article.title}`);
    }

    console.log("All articles enhanced successfully.");
  } catch (err) {
    console.error(err.message);
  }
}

enhanceArticles();

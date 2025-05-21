const fs = require('fs');
const path = require('path');
const { OpenAI } = require("openai");
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const topics = [
  "Top 5 new AI tools in 2025",
  "Best SaaS apps for freelancers",
  "Crypto airdrops worth watching",
  "How GPT is changing startups",
  "Best productivity tools powered by AI"
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}

(async () => {
  const topic = topics[Math.floor(Math.random() * topics.length)];
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `Write a 700-word blog post on: "${topic}" with SEO title and meta.` }]
  });

  const content = response.choices[0].message.content;
  const slug = slugify(topic);
  const filePath = path.join(__dirname, "../content/posts/", `${slug}.md`);
  const now = new Date().toISOString();

  fs.writeFileSync(filePath, `---
title: "${topic}"
slug: "${slug}"
pubDate: "${now}"
description: "An AI-generated article on ${topic}."
---

${content}
`);
})();

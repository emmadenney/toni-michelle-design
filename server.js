// server.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Use middleware to parse JSON payloads
app.use(bodyParser.json());

// Webhook endpoint
app.post("/webhook", (req, res) => {
  // Handle the incoming webhook payload
  const payload = req.body;
  console.log("Received Contentful webhook:", payload);

  // Implement logic to update your content in Next.js app

  res.status(200).send("Webhook received successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

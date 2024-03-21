export default function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle the request
  if (req.method === "OPTIONS") {
    // Pre-flight request. Reply successfully:
    res.status(200).end();
    return;
  }

  // Handle your other API endpoints here

  res.send({ message: "Hello from API route" });
}

// GET /html -
// Should return the following HTML content. Note when opened in the browser it should display the HTML page and not the HTML code.

import http from "http"
import fs from "fs"
import uuid4 from "uuid4"
const PORT = 3000

const app = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" })
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Error: File not found")
      } else {
        res.end(data)
      }
    })
  } else if (req.method === "GET" && req.url === "/json") {
    res.writeHead(200, { "Content-Type": "application/json" })
    fs.readFile("random.json", (err, data) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Error: File not found")
      } else {
        res.end(data)
      }
    })
  } else if (req.method === "GET" && req.url === "/uuid") {
    const id = uuid4()
    res.end(JSON.stringify({ uuid: id }))
  }
})

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`)
})

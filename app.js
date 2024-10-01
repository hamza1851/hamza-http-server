// GET /html -
// Should return the following HTML content. Note when opened in the browser it should display the HTML page and not the HTML code.

import http from "http"
import fs from "fs"
const PORT = 3000

const app = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" })

  if (req.url === "/" && req.method === "GET") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(404)
        res.write("Error: File not found")
      } else {
        res.write(data)
      }
      res.end()
    })
  } else if (req.method === "GET" && req.url === "/json") {
    fs.readFile("random.json", (err, data) => {
      if (err) {
        res.writeHead(404)
        res.write("Error: File not found")
      } else {
        res.write(data)
      }
      res.end()
    })
  }
})

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`)
})

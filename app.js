// GET /html -
// Should return the following HTML content. Note when opened in the browser it should display the HTML page and not the HTML code.

import http from "http"
import fs from "fs"
const PORT = 3000

const app = http.createServer((req, res) => {
  console.log("New request received")
  res.writeHead(200, { "Content-Type": "text/html" })
  fs.readFile("index.html", (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write("Error: File not found")
    } else {
      res.write(data)
    }
    res.end()
  })
})

app.listen(PORT, "127.0.1.2", () => {
  console.log(`Listening to port: ${PORT}`)
})

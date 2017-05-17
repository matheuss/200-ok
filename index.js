const {createServer} = require('http')

const server = createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200
  res.end('{}')
})

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`Listening on http://0.0.0.0:${port}`)
})

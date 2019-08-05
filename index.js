// Source: https://stackoverflow.com/a/26701517
const http = require("http"), httpProxy = require("http-proxy");
const
  PROTOCOL = "http",
  // HOST_NAME = "192.168.0.101",
  HOST_NAME = "localhost",
  PORT = 5050;

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  proxy.web(req, res, { target: `${PROTOCOL}://${HOST_NAME}:${PORT}` });
});

server.listen(PORT);
console.log("LISTENING ON PORT: " + PORT);

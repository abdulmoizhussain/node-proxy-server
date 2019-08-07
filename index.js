
// adb devices
// adb -s <device_name> tcp:<SourcePort> tcp:<DestinationPort>
// -----------------------------------------------
// Source: https://stackoverflow.com/a/26701517
const http = require("http"), httpProxy = require("http-proxy");
const
  PROTOCOL = "http",
  HOST_NAME = "192.168.0.101",
  // HOST_NAME = "localhost",
  PORT = 8677;

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
  const uri = `${PROTOCOL}://${HOST_NAME}:${PORT}`;
  proxy.web(req, res, { target: uri });
  console.log(`${req.method}: http://localhost:${PORT + req.url} --> ${uri}/....`);
});

server.listen(PORT);
console.log("LISTENING: http://localhost:" + PORT);

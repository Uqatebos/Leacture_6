import http from "http";
import { config } from "dotenv";

import EventEmitter from "events";

config();
const PORT = process.env.PORT || 5000;






class Router {
  constructor() {
    this.endpoint = {};
  }
  request(method = "GET", path, handler) {
    if (!this.endpoint[path]) {
      endpoint[path] = {};
    }
    const endpoint = this.endpoint[path];
    if (endpoint[method]) {
      throw new Error(`[${method}] по адресу ${path} уже существует`);
    }
    endpoint[method] = handler;
  }
}

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === "/") {
    res.writeHead(302, {
      Location: "/button",
    });
  }
  if (url === "/button") {
    res.writeHead(200, {
      "Content-type": "text/html; charset=utf8",
    });
    res.write("<button>Кнопка</button>");
  }
  res.end();
});

server.listen(PORT, () => console.log(`Сервер работает на порте ${PORT}`));

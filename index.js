import { config } from "dotenv";
import http from "http";
config();

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-type': 'text/html; charset=utf8'})
res.end('<h1>Привет!</h1><button>fsdfsd</button>')
})

server.listen(PORT, () => console.log(`Сервер работает на порте ${PORT}`))

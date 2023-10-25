import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const readStream = fs.createReadStream(path.resolve(__dirname, 'file.txt'), 'utf8')

let data = ''
readStream.on('data', (chunk) => {
    data += chunk
})

readStream.on('end', () => {
    console.log(data)
})
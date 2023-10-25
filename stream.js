import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'file.txt'), {
  flags: "a",
  encoding: "utf8",
});

  for (let i = 0; i < 200; i++) {
    writeStream.write(`some-data_${i}\n`);
  }
  writeStream.end();
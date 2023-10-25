import http from "http";

const url = "afasfasfas";

http.get(url, (res) => {
  const statusCode = res.statusCode;
  if (statusCode !== 200) {
    console.log("Ошибка в http запросе", statusCode);
    return;
  }
  let rawData = ''
  res.setEncoding('utf8')
  res.on('data', (chunk) => {
    rawData += chunk
  })
  res.on('end', () => {
    const parsedData = JSON.parse(rawData)
    console.log(parsedData)
  })
});

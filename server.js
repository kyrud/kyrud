// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // 정적 파일 제공을 위해 public 디렉터리 사용

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // 기본 페이지 제공
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
// server.js

app.use(express.urlencoded({ extended: true })); // 폼 데이터 파싱을 위한 미들웨어

app.post('/submit', (req, res) => {
  const { name, message } = req.body;
  res.send(`Thank you, ${name}, for your message: ${message}`);
});

// npm install express cors morgan  body-parser --save
const express = require('express');

const cors = require('cors');

const morgan = require('morgan');

const bodyParser = require('body-parser');

const app = express();

// morgan模块可以在command方便的显示客户端请求的详细
app.use(morgan('dev'));

app.use(cors(
  {
    origin: 'http://localhost:3000',
    credentials: true // 允许跨域
  }
));

app.use(bodyParser.json());

const users = [];

// /api/user/1
app.get('/api/user/1', (req, res) => {
  setTimeout(() => {
    res.json({ name: '张三', ts: Date.now() });
  }, 3000);
});

// /api/search
app.get('/api/search', (req, res) => {
  const q = req.query.q;
  const data = [];
  for (let i = 1; i <= 10; i++) {
    data.push(q + i);
  }
  res.json(data);
});

// /api/user
app.post('/api/user', (req, res) => {
  const user = req.body;
  user.id = Date.now();
  users.push(user);
  res.json(user)
});

// /api/user/1
app.delete('/api/user/1', (req, res) => {
  res.status(500).json({ message: '删除失败' });
});

// 监听端口
app.listen(8080, () => {
  console.log('server start at 8080');
});
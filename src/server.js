const express = require('express');
const app = express();

app.use(express.json());

// 의도적으로 input validation이 부족한 endpoint
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  // TODO: validation 필요
  res.json({ userId: id, name: 'Test User' });
});

app.post('/search', (req, res) => {
  const { query } = req.body;
  // TODO: SQL injection 위험
  res.json({ results: [`Result for ${query}`] });
});

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

app.get('/add', (req, res) => {
  const result = add(Number(req.query.a), Number(req.query.b));
  res.json({ result });
});

const divide = (a, b) => a / b;

   app.get('/divide', (req, res) => {
     const result = divide(Number(req.query.a), Number(req.query.b));
     res.json({ result });
   });

   module.exports = { app, add, subtract, divide };

if (require.main === module) {
  app.listen(3000, () => console.log('Server on 3000'));
}

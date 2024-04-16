const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Olá, mundo!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

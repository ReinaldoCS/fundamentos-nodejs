const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello world Ignite! - Fundamentos NodeJS' })
})

app.listen(3333, () => {
  console.log('servidor rodando na porta: 3333');
});

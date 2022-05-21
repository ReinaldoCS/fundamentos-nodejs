const express = require('express');

const app = express();

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

app.get('/courses', (request, response) => {
  return response.json(['curso 1', 'curso 2', 'curso 3'])
});

app.post('/courses', (request, response) => {
  return response.json(['curso 1', 'curso 2', 'curso 3', 'curso 4'])
});

app.put('/courses/:id', (request, response) => {
  return response.json(['curso 6', 'curso 2', 'curso 3', 'curso 4'])
});

app.patch('/courses/:id', (request, response) => {
  return response.json(['curso 1', 'curso 7', 'curso 3', 'curso 4'])
});

app.delete('/courses/:id', (request, response) => {
  return response.json(['curso 1', 'curso 2', 'curso 4'])
});

app.listen(3333, () => {
  console.log('servidor rodando na porta: 3333');
});

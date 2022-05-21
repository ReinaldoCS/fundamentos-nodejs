const express = require('express');

const app = express();

// Função para poder trabahar com JSON nas rodas HTTP
app.use(express.json());

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação específica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * Tipos de parâmetros
 * 
 * Route Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação / Filtro
 * Body Parms => Os objetos inserção/alteração (JSON)
 */

app.get('/courses', (request, response) => {
  /**
   * O Route Params não é obrigatório para esse tipo de rota,
   * caso não passe não é apresentado um erro
   */

  const query = request.query;
  console.log(query);

  return response.json(['curso 1', 'curso 2', 'curso 3'])
});

app.post('/courses', (request, response) => {
  const body = request.body;
  console.log(body);

  return response.json(['curso 1', 'curso 2', 'curso 3', 'curso 4'])
});

app.put('/courses/:id', (request, response) => {
  /**
   * O Route Params é obrigatório para esse tipo de rota,
   * caso não passe é disparado um erro
   */

  const { id } = request.params;
  console.log(id);

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

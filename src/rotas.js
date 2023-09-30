


const express = require('express');
const {listarInstrutores, obterInstrutor, cadastrarInstrutores, atualizarInstrutor, 
atualizarStatusInstrutor, excluirInstrutor} = require('./controladores/instrutores');
const rotas = express();

rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutores/:id', obterInstrutor);
rotas.post('/instrutores', cadastrarInstrutores);
rotas.put('/instrutores/:id', atualizarInstrutor);
rotas.patch('/instrutores/:id/status', atualizarStatusInstrutor);
rotas.delete('/instrutores/:id', excluirInstrutor);

module.exports = rotas;

//fazer a importação do express
const express = require('express');

//rotas (quando o servidor for acessado, pra onde ele vai?)
const router = express.Router();
router.get('/',(req, red)=>{//primeira rota //função anonima//dois parametros
    res.send('olá mundo!');
});

//configurações basicas do aplicativo
const app = express();
app.use('/', router); //foi passado 1 rota pois criamos apenas 1

module.exports = app; // exportamos o app, pois vamos importa-lo no servidor
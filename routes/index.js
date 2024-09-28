const express = require('express');

const router = express.Router();
router.get('/',(req,res)=>{
    //res.send('Olá turma de ADS de SMP da manhã!!');
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send('Olá ' + nome + ' voce tem ' + idade + ' anos de idade');
});

router.get('/sobre',(req,res)=>{
    res.send('Página sobre do projeto');
});

router.get('/posts/:id',(req,res)=>{
    let id = req.params.id;
    res.send('ID do post ' + id);
});

router.get('/json',(req,res)=>{
    //res.send('Olá turma de ADS de SMP da manhã!!');
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    res.json({
        nomeCompleto: nome+ ' ' +sobrenome
    });
});

router.get('/json2',(req,res)=>{
    res.json(req.query);
});

module.exports = router;
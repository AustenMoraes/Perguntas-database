const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const perguntaModel = require('./database/Pergunta')
// database

connection
  .authenticate()
  .then(()=>{
    console.log('funcionou')
  })
  .catch((msgErro) => {
    console.log(msgErro)
  })
// utilizaar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

// body parser ( disponibiliza o body como um objeto )
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//rotas
app.get('/perguntar',(req,res)=> {
  res.render('perguntar');
});

app.get('/',(req,res)=>{
  res.render('index');
});

app.post('/salvarpergunta',(req,res)=>{
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send('Recebido! Título:' + titulo + " " + "descricao:" + descricao );
});


app.listen(8080,()=> {console.log('app rodando!')});
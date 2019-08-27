# Tutorial My Node.js Project

por Matheus Catossi

## Iniciando o Projeto

Para você iniciar um projeto **Node.js** você precisa utilizar o seguinte comando

```npm init -y```

* Após inserir esse comando e pressionar enter.

* Este comando irá criar um arquivo muito importante que é o **__package.json__**. Esse arquivo é responsável pelas configurações e dependencias do seu projeto.

## Hora de salvar o código na nuvem

Após o projeto ser iniciado é necessário guardar ele na nuvem para não perder nenhuma alteração e por consequência conseguir versiona-lo futuramente. Para isso vamos utilizar uma tecnologia chamada Git. Ela permite você criar várias versões do seu projeto, melhorando seu controle.

Beleza, mas quais comandos utilizamos para isso? Vamos lá...

```git status```
 ... *Com esse comando você consegue visualizar todos os arquivos que foram modificados*

```git add .```
ou
```git add nome_do_arquivo``` ... *Esse comando é responsável por adicionar os arquivos em um "pré-commit" aguardando você subir para o repositório* 

```git commit -m "descrição do que você fez."``` ... *Antes de subir você precisa dizer o que você fez, para isso serve esse comando*

Ahhh, antes da gente iniciar o projeto e subir algo para o repositório nós precisamos criar um arquivo chamado __.gitignore__ para ignorar os arquivos que nós não queremos subir para a nuvem.

Insira os comandos
```touch .gitignore```
e
```vi .gitignore```

Pressione "CTRL + a"

Escreva
```node_modules```

Pressione "ESC"

Escreva
```:wq```

Beleza, agora seu projeto está iniciado e guardado em um repositório, qual o próximo passo? __Codar!!!__

## Hora do SHOW

Vamos lá... Primeiro adicionamos o express ao projeto. Express é uma das bibliotecas do Node.js responsável por criar rotas no servidor, proporciando uma via de acesso com nome e sobrenome até seus dados e assim possibilitando a criação do famoso __endpoint__. Para adicioná-lo no projeto use o comando 
```npm install express```.

Vamos criar um arquivo chamado __index.js__

e adicionar o código

```console.log("Meu primeiro console.log <3");```

### O que é npm

O npm é o gerenciador de pacotes do **Node.js**. https://www.npmjs.com/* 

Agora que já temos o express instalado precisamos dar o start no servidor. Para fazermos isso utilizamos o código
```node index.js```

Legal! Mas vamos criar o nosso primeiro __endpoint__?

Adicione o código

### Para criar o endpoint

``` javascript
var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send({
        "response": "ok"
    });
});
```

### Para criar o listen do server

``` javascript

var port = 3000;
app.listen(port, function () {
    console.log("Para você acessar seu servidor a URL é http://localhost:" + port);
});

```

ao arquivo __index.js__

E se eu quiser algo além desse JSON de response? Eu posso criar uma página HTML e faze-la ser Renderizada no server Node.js? Claro!!!

vamos instalar o pacote "path"

```npm install path```

em seguida vamos adicionar o código

``` javascript
let path = require('path');
app.use(express.static(path.join(__dirname, '/')));
```

Agora vamos criar o arquivo __index.html__ e adicionar um texto como "hey" nele.

## Se nós queremos, nós podemos! Bora deixar mais divertido

No arquivo __index.js__ vamos criar um endpoint para retornar uma lista de produtos

``` javascript
app.get('/product', (req, res) => {
    res.send({
        "list": [
            {
                "id": 1,
                "title": "a"
            },
            {
                "id": 2,
                "title": "b"
            },
            {
                "id": 3,
                "title": "c"
            },
            {
                "id": 4,
                "title": "d"
            },
        ]
    });
});

```

No arquivo __index.html__ vamos consumir esse serviço 

``` html
<script>
    function getProducts() {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                console.log('Success!');
                showProducts(xhr.response);
            } else {
                console.log('The request failed!');
            }

            console.log('This always runs...');
        };


        xhr.open('GET', 'http://localhost:3000/product');
        xhr.send();
    }

    function showProducts(response) {
        if (response != undefined) {
            response = JSON.parse(response);
            products = response.list;
            var tbody = document.getElementById("tbodyProducts");

            for (let product of products) {
                tbody.innerHTML += `<tr>
                                <td>` + product.id + `</td>
                                <td>` + product.title + `</td>
                            </tr>`
            }
        }
    }

    window.onload = function () {
        getProducts();
    }
</script>

```

e no corpo do arquivo

``` html
<table >
    <thead>
        <tr>
            <th>id</th>
            <th>title</th>
        </tr>
    </thead>
    <tbody id="tbodyProducts">
    </tbody>
</table>
```

Legal, tudo lindo e maravilhoso __SQN__! Vamos deixar isso mais bonito? Bora usar um framework CSS (Cascading Style Sheets - folha de estilo) para deixar isso TOP? Vamos acessar esse site: <https://getbootstrap.com/docs/4.3/getting-started/introduction/> adicionar essas referências da lib no nosso arquivo __index.html__ e deixar a tabela bonitona!!!

``` html
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"></script>
</head>
```

e sobrescreva a sua tabela por esse código aqui

``` html

<body>
  <div class="container">
      <br />
      <div class="row">
          <div class="col-12 text-center">
              <h1>My Node.js Project </h1>
          </div>
      </div>
      <br />
      <br />
      <div class="row">
          <div class="offset-2 col-8">
              <table class="table table-striped">
                  <thead>
                      <tr>
                          <th>id</th>
                          <th>title</th>
                      </tr>
                  </thead>
                  <tbody id="tbodyProducts">
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</body>

```

DONE! Temos uma tabela LINDA consumindo os dados de um endpoint no server criado com Node.js na sua máquina local __:o__

Parabéns.

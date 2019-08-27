var express = require('express');
let path = require('path');
var app = express();

// Se você quiser pode inicializar o modulo express na variavel app usando: var app = require('express')();


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
})

app.use(express.static(path.join(__dirname, '/')));


var port = 3000;
app.listen(port, function () {
    console.log("Para você acessar seu servidor a URL é http://localhost:" + port);
});
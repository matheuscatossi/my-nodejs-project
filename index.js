var express = require('express');
let path = require('path');
var app = express();


app.get('/product', (req, res) => {
    res.send({
        "list": [
            {
                "id": 1,
                "title": "Abacate",
                "price": 2.00,
                "message": "BLALLALA"
            },
            {
                "id": 2,
                "title": "Melancia",
                "price": 10.00,
                "message": "HASHSA"
            },
            {
                "id": 3,
                "title": "Morango",
                "price": 7.00,
                "message": "AHSHASHa"
            },
            {
                "id": 4,
                "title": "Maçã",
                "price": 2.00,
                "message": "213123"
            },
            {
                "id": 5,
                "title": "Chocolate",
                "price": 20.00,
                "message": "wqewewq"
            },
            {
                "id": 6,
                "title": "Óculos",
                "price": 295.00,
                "message": "ewqeqw"
            },
            {
                "id": 7,
                "title": "Camisa",
                "price": 30.00,
                "message": "wqeqw"
            },
            {
                "id": 8,
                "title": "FrutaPao",
                "price": 17.00,
                "message": "weqweq"
            },
            {
                "id": 9,
                "title": "Rebobinador de DVD",
                "price": 100.00,
                "message": "eqweqweq"
            },
            
            
        ]
    });
})

// app.get('/', (req, res) => {
//     res.send({
//         "response": "ok"
//     });
// });

app.use(express.static(path.join(__dirname, '/')));


var port = 3000;
app.listen(port, function () {
    console.log("Para você acessar seu servidor a URL é http://localhost:" + port);
});
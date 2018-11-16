// http - библиотека для создания http серверов
var http = require('http')

// Порт соединения
//
// ping google.com
//
// localhost 127.0.0.1
//
// localhost:6666
//          ^
//          указатель порта
var port = 666

var server = http.createServer(
    function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        response.end(
            new Date().toString()
        )
    }
)

// имя функции, ничего не случится
console.log
// вызов без аргумментов, пустая строка в консоли
console.log()
// вызов с аргументом 'hello', напишет к консоль
console.log('hello')

server.listen(
    port, 
    function (err) {
        if (err) {
            console.log('Ошибка!', err)
        }

        console.log('Сервер запущен на порту ' + port)
    }
)
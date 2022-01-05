const http = require('http');
const Todo = require('../data/data');
const ReadStaticFiles = require("../data/test")
const dotEnv = require('dotenv').config()
const { STATIC_EXTENTION } = require('../configs/config');
const PORT = process.env.PORT || 8081
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1'



const server = http.createServer((req, res) => {
    // let todos = Todo.getTodos()
    let filePath = req.url
    let body_ = ''
    let method = req.method
    if (filePath == '/') {

        switch (method) {
            case 'GET':
                ReadStaticFiles(req, res)
                break;
            case 'POST':
                req.on('data', chunk => body_ += chunk)
                req.on('end', () => {
                    ReadStaticFiles(req, res)
                    res.end()
                })
                break;
        }
    }
    else if (filePath == '/app') {
        ReadStaticFiles(req, res)
    }
    else if (filePath == '/api/todos') {
        switch (method) {
            case 'GET':
                res.writeHead(200, { 'Content-type': 'application/json' })
                res.end(todos)
                break;
        }
    }
    else if (filePath == '/sendTodo') {
        req.on('data', chunk => {
            console.log(`Data chunk available: ${chunk}`)
        })
        req.on('end', () => {
            res.writeHead(200, { 'Content-type ': 'application/json' })
            res.end(chunk)
        })

    }
    else {
        res.writeHead(404, { 'Content-type': 'application/json' })
        res.end(JSON.stringify({ message: 'Route Not Found' }))
    }
})
server.listen(PORT, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});
module.exports = {
    server,
}
const Dummdata = require('./Dummydata.json')
let getTodos = () => {
    let todos = Dummdata
    return JSON.stringify(todos)
}
let sendTodos = () => {
    let sendTodo = Dummdata
    return JSON.parse(sendTodo)
}
module.exports = {
    getTodos, sendTodos
}

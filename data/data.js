const Dummdata = require('./Dummydata.json')
let getTodos = () => {
    let todos = Dummdata
    return JSON.stringify(todos)
}
module.exports = {
    getTodos
}

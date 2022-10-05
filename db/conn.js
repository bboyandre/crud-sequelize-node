const {
    Sequelize
} = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'toor', {
    host: '127.0.0.1',
    dialect: 'mysql'
})

// try {
//     sequelize.authenticate()
//     console.log('Conectamos com sucesso com o Sequelize!')
// } catch (err) {
//     console.log('Não foi possível conectar: ', err)
// }

module.exports = sequelize
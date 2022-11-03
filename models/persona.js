const Sequelize = require('sequelize');

const Persona = (sequelize) =>{
    sequelize.define('Persona',{
        nombrePersona: Sequelize.STRING,
        apellidoPersona: Sequelize.STRING,
        edadPersona: Sequelize.STRING
    })
}

module.exports = Persona;
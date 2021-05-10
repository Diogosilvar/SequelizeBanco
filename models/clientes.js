'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class clientes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            clientes.belongsToMany(models.agencia, {
                through: "contas"
            })
        }
    };
    clientes.init({
        nome: DataTypes.STRING,
        cpf: DataTypes.STRING,
        sexo: DataTypes.STRING,
        salario: DataTypes.DOUBLE,
        contato: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'clientes',
    });
    return clientes;
};
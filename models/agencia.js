'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class agencia extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            agencia.belongsToMany(models.clientes, {
                through: "contas"
            })
        }
    };
    agencia.init({
        numero_da_agencia: DataTypes.INTEGER,
        descricao_agencia: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'agencia',
    });
    return agencia;
};
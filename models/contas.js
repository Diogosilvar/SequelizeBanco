'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Contas extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Contas.init({
        status: DataTypes.STRING,
        dtabertura: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Contas',
    });
    return Contas;
};
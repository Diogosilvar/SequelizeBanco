const { where } = require('sequelize/types')
const { Agencias, Sequelize } = require('../models/')
const Op = Sequelize.Op


class Agencias_controller {
    static async buscarAgencias(req, res) {
        try {
            const agencias = await Agencias.findAll()
            return res.status(200).json(agencias)
        } catch (erro) {
            return res.status(400).json({
                //{ mensagem: "Você é muito feio para fazer essa consulta" }
                error: erro.message
            })
        }
    }
    static async inserirAgencia(req, res) {

        try {
            const novaAgencia = await Agencia.create(req.body)
            return res.status(201).json(novaAgencia)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async alterarAgencia(req, res) {
        try {
            const alterarAgencia = await Agencias.findByPk(req.body.id)
            if (!alterarAgencia) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await alterarAgencia.update(req.body)
                return res.status(204).json(alterarAgencia)
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }

    static async excluirAgencia(req, res) {
        try {
            const excluirAgencia = await Agencias.findByPk(req.body.id)
            if (!excluirAgencia) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await excluirAgenciaa.destroy(req.body)
                return res.status(204).json(excluirAgencia)
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }

    }

    static async excluirAgencia(req, res) {
        try {
            const excluirAgencia = await Agencia.findByPk(req.body.id)
            if (!excluirAgencia) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await excluirAgencia.destroy()
                return res.status(204).json(excluirAgencia)
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }

    }
    static async encontrarAgenciaPorNumero(req, res) {
        let numero = '%' + req.query.numero_da_agencia
        try {
            const encontrarAgenciaPorNumero = await Agencia.findAll({
                where: {
                    numero_da_agencia: {
                        [Op.like]: numero
                    }
                }
            })
            return res.status(200).json(encontrarAgenciaPorNumero)
        } catch (erro) {
            return res.status(400).json({
                erro: erro.message
            })
        }
    }

}


module.exports = Agencias_controller
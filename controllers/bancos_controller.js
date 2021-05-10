const { Bancos, Sequelize } = require('../models/')
const bancos = require('../models/bancos')
const Op = Sequelize.Op


class Bancos_controller {
    static async buscarBancos(req, res) {
        try {
            const bancos = await Bancos.findAll()
            return res.status(200).json(bancos)
        } catch (erro) {
            return res.status(400).json({
                //{ mensagem: "Você é muito feio para fazer essa consulta" }
                error: erro.message
            })
        }
    }

    static async inserirBanco(req, res) {

        try {
            const novoBanco = await Bancos.create(req.body)
            return res.status(201).json(novoBanco)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async alterarBanco(req, res) {
        try {
            const bancoParaAlterar = await Bancos.findByPk(req.body.id)
            if (!bancoParaAlterar) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await bancoParaAlterar.update(req.body)
                return res.status(204).json(bancoParaAlterar)
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async excluirBanco(req, res) {
        try {
            const excluirBanco = await Bancos.findByPk(req.body.id)
            if (!excluirBanco) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await excluirBanco.destroy()
                return res.status(204).json(excluirBanco)
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }

    }
    static async encontrarBancoPorRazaoSocial(req, res) {
        let numero = '%' + req.query.razao_social
        try {
            const encontrarBancoPorRazaoSocial = await Bancos.findAll({
                where: {
                    razao_social: {
                        [Op.like]: numero
                    }
                }
            })
            return res.status(200).json(encontrarBancoPorRazaoSocial)
        } catch (erro) {
            return res.status(400).json({
                erro: erro.message
            })
        }
    }
}

module.exports = Bancos_controller
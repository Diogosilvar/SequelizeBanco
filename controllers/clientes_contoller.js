const { Clientes, Sequelize } = require('../models/')
const Op = Sequelize.Op


class Clientes_controller {
    static async buscarClientes(req, res) {
        try {
            const clientes = await Clientes.findAll()
            return res.status(200).json(clientes)
        } catch (erro) {
            return res.status(400).json({
                //{ mensagem: "Você é muito feio para fazer essa consulta" }
                error: erro.message
            })
        }
    }
    static async inserirCliente(req, res) {

        try {
            const novoCliente = await Clientes.create(req.body)
            return res.status(201).json(novoCliente)
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }

    static async alterarCliente(req, res) {
        try {
            const clienteParaAlterar = await Clientes.findByPk(req.body.id)
            if (!clienteParaAlterar) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await clienteParaAlterar.update(req.body)
                return res.status(204).json(clienteParaAlterar)
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }
    }
    static async excluirCliente(req, res) {
        try {
            const excluirCliente = await Clientes.findByPk(req.body.id)
            if (!excluirCliente) {
                return res.status(400).json({
                    error: erro.message
                })
            } else {
                await excluirCliente.destroy()
                return res.status(204).json(excluirCliente)
            }
        } catch (erro) {
            return res.status(400).json({
                error: erro.message
            })
        }

    }
    static async encontrarClientePorCpf(req, res) {
        let numero = '%' + req.query.razao_social
        try {
            const encontrarClientePorCpf = await clientes.findAll({
                where: {
                    cpf: {
                        [Op.like]: numero
                    }
                }
            })
            return res.status(200).json(encontrarClientePorCpf)
        } catch (erro) {
            return res.status(400).json({
                erro: erro.message
            })
        }
    }
}
module.exports = Clientes_controller
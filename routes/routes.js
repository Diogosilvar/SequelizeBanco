const { Router } = require('express')
const Agencias_controller = require('../controllers/agencia_controller')
const routes = Router()
const Bancos_controller = require('../controllers/bancos_controller')
const Clientes_controller = require('../controllers/clientes_contoller')

routes.get('/bancos', Bancos_controller.buscarBancos)
routes.get('/clientes', Clientes_controller.buscarClientes)
routes.get('/agencia', Agencias_controller.buscarAgencias)

routes.post('/clientes', Clientes_controller.inserirCliente)
routes.post('/bancos', Bancos_controller.inserirBanco)
routes.post('/agencias', Agencias_controller.inserirAgencia)

routes.put('/clientes', Clientes_controller.inserirCliente)
routes.put('/bancos', Bancos_controller.inserirBanco)
routes.put('/agencias', Agencias_controller.inserirAgencia)

routes.delete('/clientes', Clientes_controller.excluirCliente)
routes.delete('/bancos', Bancos_controller.excluirBanco)
routes.delete('/agencias', Agencias_controller.excluirAgencia)




module.exports = routes
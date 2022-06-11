import { Router } from "express"
import { CreateClientController } from "../../../../modules/clients/useCases/createClient/createClientController"
import { FindClientController } from "../../../../modules/clients/useCases/findClient/findClientController"
import { ListClientController } from "../../../../modules/clients/useCases/listClients/listClientController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
const clientRoutes = Router()

const createClientsController = new CreateClientController()
const listClientsController = new ListClientController()
const findClientsController = new FindClientController()

clientRoutes.post('/', ensureAuthenticated, createClientsController.handle)
clientRoutes.post('/find', ensureAuthenticated, findClientsController.handle)
clientRoutes.get('/all', ensureAuthenticated, listClientsController.handle)

export {clientRoutes}



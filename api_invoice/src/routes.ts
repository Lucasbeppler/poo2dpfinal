import { Router } from 'express'

import { PayrollController } from './controllers/PayrollController'

const routes = Router();

const payrollController = new PayrollController()

routes.post('/invoice', payrollController.create)
routes.get('/invoice', payrollController.index)
routes.delete('/invoice/:id', payrollController.delete)

export { routes }


import { Request, Response } from 'express'
import { PayrollServices } from '../services/PayrollServices'

class PayrollController {

  async create(request: Request, response: Response) {
    let {description, issue_date, client, invoice_value } = request.body
    const payrollServices = new PayrollServices()
    try {
      const payroll = await payrollServices.create({ description, issue_date, client, invoice_value })
      return response.json(payroll)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const payrollServices = new PayrollServices()

    try {
      const payroll = await payrollServices.index()
      return response.json(payroll)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const payrollServices = new PayrollServices()
    const { id } = request.params

    try {
      const payroll = await payrollServices.delete({ id })
      return response.json({ message: 'Payroll id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { PayrollController }


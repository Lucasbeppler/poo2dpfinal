import { getCustomRepository } from 'typeorm'
import { PayrollRepository } from '../repositories/PayrollRepository'

interface IPayrollCreate {
  description: string;
  issue_date: string;
  client: string;
  invoice_value: number;
}

interface IPayrollShow {
  id: string
}

class PayrollServices {

  async create({ description, issue_date, client, invoice_value,  }: IPayrollCreate) {

    const payrollRepository = getCustomRepository(PayrollRepository)
    const payroll = payrollRepository.create({
      description, 
      issue_date,
      client,
      invoice_value,
    })

    await payrollRepository.save(payroll)

    return payroll
  }

  async index() {
    const payrollRepository = getCustomRepository(PayrollRepository)

    const payroll = await payrollRepository.find()

    return payroll;
  }

  async delete({ id }: IPayrollShow) {
    const payrollRepository = getCustomRepository(PayrollRepository)

    const payroll = await payrollRepository.findOne({ id })

    if (!payroll) {
      throw new Error('Payroll id not found!!')
    }

    return await payrollRepository.delete({ id })
  }

}

export { PayrollServices }
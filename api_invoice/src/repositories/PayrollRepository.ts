import { Repository, EntityRepository } from 'typeorm'
import { Payroll } from '../entities/Payroll'

@EntityRepository(Payroll)
class PayrollRepository extends Repository<Payroll> {

}

export { PayrollRepository }


import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('invoice')
class Payroll {

  @PrimaryColumn()
  id: string;

  @Column()
  description: string;

  @Column()
  issue_date: string;

  @Column()
  client: string;

  @Column()
  invoice_value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Payroll }

class Expense {
  private label: string;
  private amount: number;
  private date: string | Date;
  private id: string

  constructor (label: string, amount: number, date: string | Date) {
    this.label = label
    this.amount = amount
    this.date = date
    this.id = createUniqueId()
  }

  createUniqueId() {

  }

  getLabel () {
    return this.label
  }

  getAmount () {
    return this.amount
  }

  getId () {
    return this.id
  }

  getDate () {
    return this.date
  }
}

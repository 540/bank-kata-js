import Transaction from './transaction'

export default class Account {
  constructor(repository, printer) {
    this.repository = repository
    this.printer = printer
  }

  deposit(amount) {
    this.repository.save(new Transaction(amount))
  }

  withdraw(amount) {
    this.repository.save(new Transaction(-amount))
  }

  printStatement() {
    this.printer.printHeader()

    this.repository.findAll().forEach(statement => {
      this.printer.printStatement(statement)
    })
  }
}

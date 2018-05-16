import Transaction from './transaction'

export default class Account {
  constructor(repository) {
    this.repository = repository
  }

  deposit(amount) {
    this.repository.save(new Transaction(amount))
  }

  withdraw(amount) {}

  printStatement() {}
}

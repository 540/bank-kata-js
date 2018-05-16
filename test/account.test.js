import Account from '../src/account'
import Transaction from '../src/transaction'

let transactionRepository, account, printer

const fakeRepository = () => {
  let transactions = []

  return {
    save: transaction => transactions.push(transaction),
    findAll: () => transactions,
    _setAll: newTransactions => (transactions = newTransactions),
    _getAll: () => transactions
  }
}

describe('Account', () => {
  beforeEach(() => {
    transactionRepository = fakeRepository()
    printer = {
      printHeader: jest.fn(),
      printStatement: jest.fn()
    }
    account = new Account(transactionRepository, printer)
  })

  describe('deposit', () => {
    it('saves a deposit', () => {
      account.deposit(1000)

      expect(transactionRepository._getAll()).toContainEqual(
        new Transaction(1000)
      )
    })

    it('saves another deposit', () => {
      account.deposit(500)

      expect(transactionRepository._getAll()).toContainEqual(
        new Transaction(500)
      )
    })
  })

  describe('withdraw', () => {
    it('saves a withdraw', () => {
      account.withdraw(1000)

      expect(transactionRepository._getAll()).toContainEqual(
        new Transaction(-1000)
      )
    })

    it('saves another withdraw', () => {
      account.withdraw(500)

      expect(transactionRepository._getAll()).toContainEqual(
        new Transaction(-500)
      )
    })
  })

  describe('print statement', () => {
    it('prints statements', () => {
      transactionRepository._setAll([
        new Transaction(1000),
        new Transaction(200),
        new Transaction(-400)
      ])

      account.printStatement()

      expect(printer.printHeader).toHaveBeenCalled()
      expect(printer.printStatement).toHaveBeenCalledWith(new Transaction(1000))
      expect(printer.printStatement).toHaveBeenCalledWith(new Transaction(200))
      expect(printer.printStatement).toHaveBeenCalledWith(new Transaction(-400))
    })

    it('prints another statements ', () => {
      transactionRepository._setAll([new Transaction(9800)])

      account.printStatement()

      expect(printer.printHeader).toHaveBeenCalled()
      expect(printer.printStatement).toHaveBeenCalledWith(new Transaction(9800))
    })
  })
})

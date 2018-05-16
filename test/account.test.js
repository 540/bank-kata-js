import Account from '../src/account'
import Transaction from '../src/transaction'

let transactionRepository, account, printer

describe('Account', () => {
  beforeEach(() => {
    transactionRepository = {
      save: jest.fn(),
      findAll: jest.fn()
    }
    printer = {
      printHeader: jest.fn(),
      printStatement: jest.fn()
    }
    account = new Account(transactionRepository, printer)
  })

  describe('deposit', () => {
    it('saves a deposit', () => {
      account.deposit(1000)

      expect(transactionRepository.save).toHaveBeenCalledWith(
        new Transaction(1000)
      )
    })

    it('saves another deposit', () => {
      account.deposit(500)

      expect(transactionRepository.save).toHaveBeenCalledWith(
        new Transaction(500)
      )
    })
  })

  describe('withdraw', () => {
    it('saves a withdraw', () => {
      account.withdraw(1000)

      expect(transactionRepository.save).toHaveBeenCalledWith(new Transaction(-1000))
    })

    it('saves another withdraw', () => {
      account.withdraw(500)

      expect(transactionRepository.save).toHaveBeenCalledWith(new Transaction(-500))
    })
  })

  describe('print statement', () => {
    it('prints statements', () => {
      transactionRepository.findAll.mockReturnValue([
        new Transaction(1000), new Transaction(200), new Transaction(-400)
      ])

      account.printStatement()

      expect(printer.printHeader).toHaveBeenCalled()
      expect(printer.printStatement).toHaveBeenCalledWith(
        new Transaction(1000)
      )
      expect(printer.printStatement).toHaveBeenCalledWith(
        new Transaction(200)
      )
      expect(printer.printStatement).toHaveBeenCalledWith(
        new Transaction(-400)
      )
    })

    it('prints another statements ', () => {
      transactionRepository.findAll.mockReturnValue([new Transaction(9800)])

      account.printStatement()

      expect(printer.printHeader).toHaveBeenCalled()
      expect(printer.printStatement).toHaveBeenCalledWith(
        new Transaction(9800)
      )
    })
  })
})

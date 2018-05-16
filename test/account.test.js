import Account from '../src/account'
import Transaction from '../src/transaction'

let transactionRepository, account

describe('Account', () => {
  beforeEach(() => {
    transactionRepository = {
      save: jest.fn(),
      findAll: jest.fn()
    }
    account = new Account(transactionRepository)
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
})

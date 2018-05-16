import Account from '../src/account'

describe('StatementPrinterFeature', () => {
  it('prints transactions in reverse chronological order', () => {
    const console = jest.fn()
    const account = new Account()

    account.deposit(1000)
    account.withdraw(-100)
    account.deposit(500)

    account.printStatement()

    expect(console).toHaveBeenCalledWith('AMOUNT | BALANCE')
    expect(console).toHaveBeenCalledWith('500.00 | 1400.00')
    expect(console).toHaveBeenCalledWith('-100.00 | 900.00')
    expect(console).toHaveBeenCalledWith('1000.00 | 1000.00')
  })
})

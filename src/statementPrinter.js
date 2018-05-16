export default class StatementPrinter {
  printHeader() {
    throw Error(`Printer externo no invocable directamente`)
  }

  printStatement(transaction) {
    throw Error(
      `Printer externo no invocable directamente (${transaction.amount})`
    )
  }
}

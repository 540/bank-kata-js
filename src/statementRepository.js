export class StatementRepository {
  save(transaction) {
    throw Error(
      `Repositorio externo no invocable directamente (${transaction.amount})`
    )
  }

  findAll() {
    throw Error(`Repositorio externo no invocable directamente`)
  }
}

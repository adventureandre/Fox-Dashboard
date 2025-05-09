import { TransactionRepository } from '@/repositories/transaction-repository'
import { ResourceNotFoundError } from '../errors/resource-not-found-error'
interface UpdateTransactionUseCaseRequest {
  id: string
  nome: string
  valor: number
  date: Date
  categoria?: number | null
  conciliado?: boolean
  conta?: string
  imported?: boolean
  confirmed?: boolean
}

export class UpdateTransactionUseCase {
  constructor(private transactionsRepository: TransactionRepository) {}

  async execute({
    id,
    nome,
    date,
    valor,
    categoria,
    conciliado,
    confirmed,
    conta,
    imported,
  }: UpdateTransactionUseCaseRequest) {
    try {
      const existingTransaction = await this.transactionsRepository.findById(id)

      if (!existingTransaction) {
        throw new ResourceNotFoundError()
      }

      const transaction = await this.transactionsRepository.update(id, {
        nome,
        valor,
        date,
        categoria,
        confirmed,
        imported,
        conta: conta ?? 'manual',
        conciliado: !!conciliado,
      })

      return transaction
    } catch (error) {
      console.error('Erro ao atualizar transação:', error)
    }
  }
}

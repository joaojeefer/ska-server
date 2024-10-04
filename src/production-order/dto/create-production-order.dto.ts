export default interface CreateProductionOrderDto {
  quantity: number; // quantidade_pecas
  status: string; // status
  executionDate: Date; // data_execucao
  creationDate: Date; // data_criacao
  description: string; // descricao
  plannedTime: number; // tempo_planejado
  productId: number; // produto_id
  userId: number; // usuario_id
}

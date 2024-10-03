export default interface CreateMetricsDTO {
  machineId: number;
  availability: number;
  performance: number;
  quality: number;
  oee: number;
  scheduledTime: number;
  downtime: number;
  productionTime: number;
  productionTheoricTIme: number;
  realProductionTime: number;
  partsDiscarded: number;
  partsProduced: number;
  date: Date;
}

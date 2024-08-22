interface IFarmRepository {
  findByProducerId(id),
  save(payload),
  update(id, payload),
}

export {
  IFarmRepository
}
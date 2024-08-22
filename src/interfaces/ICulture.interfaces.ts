interface ICultureRepository {
  findByFarmId(id),
  save(payload),
  update(id, payload),
}

export {
  ICultureRepository
}
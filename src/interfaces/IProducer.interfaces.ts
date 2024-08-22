interface IProducerRepository {
  save(payload),
  update(id, payload),
  delete(id),
}

interface IProducerCase {
  post(payload),
  patch(id, payload),
  delete(id, payload),
}

export {
  IProducerRepository,
  IProducerCase
}
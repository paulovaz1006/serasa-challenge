interface IUserRepository {
  save(payload):void,
  update(id, payload),
  delete(id, payload),
}

interface IUserCase {
  post(payload),
  patch(id, payload),
  delete(id, payload),
}

export {
  IUserRepository,
  IUserCase
}
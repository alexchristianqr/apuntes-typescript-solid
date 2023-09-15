interface User {
  fullName: string
}

abstract class GenericProvider {
  abstract getData(): Array<User>
}

export class JsonDatabaseProvider extends GenericProvider {
  getData(): Array<User> {
    return [{ fullName: "Alex Christian" }, { fullName: "Glenda Llacza" }, { fullName: "Camila Llerena" }]
  }
}

export class LocalDatabaseProvider extends GenericProvider {
  getData(): Array<User> {
    return [{ fullName: "Mariano Melgar" }, { fullName: "Ramon Castilla" }, { fullName: "Jose Olaya" }]
  }
}

export class UserService {
  constructor(private provider: GenericProvider) {}

  async getUsers(): Promise<Array<User>> {
    return this.provider.getData()
  }
}

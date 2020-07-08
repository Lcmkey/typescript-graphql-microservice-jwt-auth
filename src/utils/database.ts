import { getManager, Repository, ObjectType } from "typeorm";

class Database<T> {
  repo: Repository<T>;

  constructor(entityClass: ObjectType<T>) {
    this.repo = getManager().getRepository(entityClass);
  }

  async save(entity: T) {
    try {
      await this.repo.save(entity);

      return true;
    } catch (err) {
      console.log(err);

      return false;
    }
  }

  async get(filter: object) {
    try {
      // eg: filter={ ukey: "123"};
      const result = await this.repo.findOne(filter);

      return result;
    } catch (err) {
      console.log(err);

      return undefined;
    }
  }
}

export default Database;

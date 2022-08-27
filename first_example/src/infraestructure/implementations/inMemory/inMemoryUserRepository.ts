import { User } from 'domain/entities/User';
import { UserRepository } from 'domain/repositories/UserRepository';
// import usersJson from './usersJSON.json';

export class InMemoryUserRepository implements UserRepository {
  private readonly userData: User[] = [];

  async getAll (): Promise<User[]> {
    return this.userData;
  }

  async save (user: User): Promise<User> {
    this.userData.push(user);
    return user;
  }

  async getByUserName (username: string): Promise<User | null> {
    // const userFound = usersJson.find(x => x.username === username);
    // if (userFound === undefined) return null;
    // return userFound;
    return null;
  }

  async update (user: User): Promise<User> {
    return user;
  }

  async delete (user: User): Promise<void> {}

  async getById (id: string): Promise<User | null> {
    return null;
  }
}

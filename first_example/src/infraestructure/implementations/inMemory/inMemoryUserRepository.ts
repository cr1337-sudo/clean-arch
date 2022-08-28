import { User } from 'domain/entities/User';
import { UserRepository } from 'domain/repositories/UserRepository';
// import usersJson from './usersJSON.json';

export class InMemoryUserRepository implements UserRepository {
  private userData: User[] = [];

  async getAll (): Promise<User[]> {
    return this.userData;
  }

  async save (user: User): Promise<User> {
    this.userData.push(user);
    return user;
  }

  async getByUserName (username: string): Promise<User | null> {
    const userFound = this.userData.find(x => x.username === username);
    if (userFound === undefined) return null;
    return userFound;
  }

  async update (user: User): Promise<User> {
    const users: User[] = this.userData.filter(x => x.id !== user.id);
    users.push(user);
    this.userData = users;
    return user;
  }

  async delete (user: User): Promise<void> {
    const users = this.userData.filter(x => x.id !== user.id);
    this.userData = users;
  }

  async getById (id: string): Promise<User | null> {
    const user = this.userData.find(x => x.id === id);
    if (user != null) return user;
    return null;
  }
}

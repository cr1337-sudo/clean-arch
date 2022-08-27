import { User } from 'domain/entities/User';
import { UserRepository } from 'domain/repositories/UserRepository';
import { UserNotFoundExepction } from '../../exceptions/UserNotFoundException';

export class UserGetterById {
  private readonly _userRepository: UserRepository;

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  async run (id: string): Promise<User> {
    const user = await this._userRepository.getById(id);
    if (user === null) throw new UserNotFoundExepction();
    return user;
  }
}

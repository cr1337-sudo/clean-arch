// Código que se repite varias veces en otros repositorios usecases

import { UserRepository } from '../../repositories/UserRepository';

export class ExistsUserByUsername {
  private readonly _userRepository: UserRepository;

  constructor (useRepository: UserRepository) {
    this._userRepository = useRepository;
  }

  async run (username: string): Promise<boolean> {
    const user = await this._userRepository.getByUserName(username);

    if (user !== null) return true;

    return false;
  }
}

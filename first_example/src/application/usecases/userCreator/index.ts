import { UserAlreadyExistsException } from './../../../domain/exceptions/UserAlreadyExistsException';
import { ExistsUserByUsername } from './../../../domain/services/ExistUserByUsername/index';
import { UserRepository } from './../../../domain/repositories/UserRepository';
import { User } from '../../../domain/entities/User';

export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository;
  private readonly _existUserByUsername: ExistsUserByUsername;

  constructor (userRepository: UserRepository) {
    this._userRepository = userRepository;
    this._existUserByUsername = new ExistsUserByUsername(userRepository);
  }

  async run (body: User): Promise<User> {
    // exitsByUsername es un servicio de dominio, generalmente es lógica que se repite, esto abstrae la lógica y
    // Los usecases pueden utilizarla. Este debe ser pasado como constructor y no como dependencia
    if (body.username === undefined) throw new Error('Petó');
    const existUser: boolean = await this._existUserByUsername.run(body.username);
    if (existUser) throw new UserAlreadyExistsException();
    const userCreated: User = await this._userRepository.save(body);
    return userCreated;
  }
}

// Lo bueno de los usecases es que permiten aislar lógica

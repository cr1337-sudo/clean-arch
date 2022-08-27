import { UserGetterUseCase } from './../../../application/usecases/userGetter/index';
// Un driving adapter es un punto de entrada a nuestra capa de dominio, puede ser un
// aplicacion de consola, api rest, un listener de una cola sqs, etc
// los puntos de entrada son los que van a utilizar nuestros casos de uso
import { User } from '../../../domain/entities/User';
import { UserCreatorUseCase } from './../../../application/usecases/userCreator/index';
import { InMemoryUserRepository } from '../../implementations/inMemory/inMemoryUserRepository';

(async () => {
  const inMemoryUserRepo = new InMemoryUserRepository();

  // Creando usuarios
  const userCreatorUseCase = new UserCreatorUseCase(inMemoryUserRepo);

  const userToCreate: User = {
    name: 'Luz',
    age: 12,
    username: 'luzxdlo',
    id: 'id1'
  };
  await userCreatorUseCase.run(userToCreate);

  // Obteniendo usuarios
  const userGetterUseCase = new UserGetterUseCase(inMemoryUserRepo);
  const usersReturned = await userGetterUseCase.run();
  console.log('GET USUARIOS');
  console.log(usersReturned);
})();

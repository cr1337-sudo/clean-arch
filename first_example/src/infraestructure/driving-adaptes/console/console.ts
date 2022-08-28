import { UserDeleteUseCase } from './../../../application/usecases/userDelete/index';
import { UserUpdaterUseCase } from './../../../application/usecases/userUpdater/index';
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
    id: 'id'
  };
  await userCreatorUseCase.run(userToCreate);

  // Obteniendo usuarios
  const userGetterUseCase = new UserGetterUseCase(inMemoryUserRepo);
  const usersReturned = await userGetterUseCase.run();
  console.log('GET USUARIOS');
  console.log(usersReturned);

  // Actualizar usuarios
  const userUpdaterUseCase = new UserUpdaterUseCase(inMemoryUserRepo);
  await userUpdaterUseCase.run({
    id: 'id',
    username: 'Luci'
  });

  const usersReturned2 = await userGetterUseCase.run();
  console.log(usersReturned2);

  // Eliminar un usuario
  const userDeleterUseCase = new UserDeleteUseCase(inMemoryUserRepo);
  await userDeleterUseCase.run('id');

  const usersReturned3 = await userGetterUseCase.run();
  console.log(usersReturned3);
})();

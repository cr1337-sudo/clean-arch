import { User } from '../../domain/entities/User';

export interface UserRepository{
  getAll: () => Promise<User[]>
  save: (user: User) => Promise<User>
  getByUserName: (username: string) => Promise<User | null>
  update: (user: User) => Promise<User>
  delete: (user: User) => Promise<void>
  getById: (id: string) => Promise<User | null>
}

// Siempre es una interfaz, acá NO se introduce lógica, solo es un contrato que vamos a firmar ne la capa de infraestructura.
// "Firmar" utilizando una clase que extienda esta interfaz

export class UserNotFoundExepction extends Error {
  constructor () {
    super('User not found');
  }
}

import { User } from "./User";

export class UserService {
  private validUsers: User[] = [new User("user", "password")];

  authenticate(username: string, password: string): boolean {
    return this.validUsers.some(
      (user) => user.username === username && user.password === password
    );
  }
}

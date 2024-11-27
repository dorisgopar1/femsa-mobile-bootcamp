import { UserService } from "../domain/UserService";

export class AuthAPI {
  constructor(private userService: UserService) {}

  authenticate(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.userService.authenticate(username, password));
      }, 1000);
    });
  }
}

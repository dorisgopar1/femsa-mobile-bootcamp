import { AuthAPI } from "../infrastructure/AuthAPI";

import { LoginView } from "../application/LoginView";

export class LoginPresenter {
  constructor(private view: LoginView, private authAPI: AuthAPI) {}

  async handleLogin(username: string, password: string): Promise<void> {
    this.view.showLoading();
    const isAuthenticated = await this.authAPI.authenticate(username, password);

    if (isAuthenticated) {
      this.view.showLoginSuccess();
    } else {
      this.view.showLoginError("Invalid username or password");
    }

    this.view.hideLoading();
  }
}

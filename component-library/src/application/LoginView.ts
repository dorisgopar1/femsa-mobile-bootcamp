export interface LoginView {
  showLoading(): void;
  hideLoading(): void;
  showLoginSuccess(): void;
  showLoginError(errorMessage: string): void;
}

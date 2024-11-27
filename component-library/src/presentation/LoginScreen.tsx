import React, { useState } from "react";
import { LoginPresenter } from "../application/LoginPresenter";
import { AuthAPI } from "../infrastructure/AuthAPI";
import { UserService } from "../domain/UserService";

export const LoginScreen: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const userService = new UserService();
  const authAPI = new AuthAPI(userService);
  const presenter = new LoginPresenter(
    {
      showLoading: () => setLoading(true),
      hideLoading: () => setLoading(false),
      showLoginSuccess: () => setMessage("Login Successful!"),
      showLoginError: (errorMessage: string) => setMessage(errorMessage),
    },
    authAPI
  );

  const handleLogin = async () => {
    setMessage("");
    await presenter.handleLogin(username, password);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <div>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginScreen;
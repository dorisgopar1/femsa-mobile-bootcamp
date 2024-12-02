import * as Keychain from "react-native-keychain";

export const login = async (username: string, password: string) => {
  if (username === "user" && password === "password") {
    const token = "mock-jwt-token";
    await Keychain.setGenericPassword("userToken", token);
    return true;
  } else {
    throw new Error("Invalid credentials");
  }
};

export const logout = async () => {
  await Keychain.resetGenericPassword();
};

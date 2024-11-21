import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";

type ButtonError = {
  message: string;
  code?: number;
};

type ButtonProps<T = string> = {
  value: T;
  onClick?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: ViewStyle;
  error?: ButtonError;
};

const Button = <T>({
  value,
  onClick,
  disabled = false,
  style,
  textStyle,
}: ButtonProps<T>) => {
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={disabled}
      style={[styles.button, style, disabled && styles.disabled]}
    >
      <Text style={[styles.text, textStyle]}>{value}</Text>
      {error && (
        <Text style={styles.errorText}>
          Error: {error.message} {error.code && `Código: ${error.code}`}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  disabled: {
    backgroundColor: "gray",
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default Button;

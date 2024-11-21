import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

type InputFieldError = {
  message: string;
  field: string;
};

type InputFieldProps = {
  label: string;
  value: string | number;
  onChange: (value: string | number) => void;
  type?: "text" | "number";
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: InputFieldError;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  disabled = false,
  required = false,
  errorMessage,
}: InputFieldProps) => {
  const [error, setError] = useState<string | null>(null);

  const validateInput = () => {
    if (required && !value) {
      setError("Este campo es obligatorio");
    } else if (type === "number" && isNaN(Number(value))) {
      setError("El valor debe ser un número");
    } else {
      setError(null);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        value={String(value)}
        onChangeText={(text) => {
          onChange(text);
          validate();
        }}
        placeholder={placeholder}
        keyboardType={type === "number" ? "numeric" : "default"}
        editable={!disabled}
      />
      {error || errorMessage ? (
        <Text style={styles.errorText}>{error || errorMessage?.message}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    fontSize: 16,
  },
  errorText: {
    marginTop: 8,
    color: "red",
  },
});

export default InputField;

import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";

type ListError = {
  message: string;
  code?: number;
};

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => JSX.Element;
  filter?: (item: T) => boolean;
  error?: ListError;
};

const List = <T>({ items, renderItem, filter, error }: ListProps<T>) => {
  const filteredItems = filter ? items.filter(filter) : items;

  return (
    <>
      {error ? (
        <Text style={styles.errorText}>
          Error: {error.message} {error.code && `Código: ${error.code}`}
        </Text>
      ) : (
        <FlatList
          data={filteredItems}
          renderItem={({ item }) => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
  },
});

export default List;

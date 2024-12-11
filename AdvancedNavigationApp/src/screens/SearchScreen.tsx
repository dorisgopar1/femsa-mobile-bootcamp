import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = () => {
    if (searchQuery) {
      const simulatedResults = [
        `Resultado 1 para "${searchQuery}"`,
        `Resultado 2 para "${searchQuery}"`,
        `Resultado 3 para "${searchQuery}"`,
      ];
      setResults(simulatedResults);
    } else {
      setResults([]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={handleSearch}
      />

      <Button title="Search" onPress={handleSearch} color="#4CAF50" />

      {results.length > 0 ? (
        <FlatList
          data={results}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.resultItem}>
              <Text style={styles.resultText}>{item}</Text>
            </TouchableOpacity>
          )}
          style={styles.resultsList}
        />
      ) : (
        <Text style={styles.noResultsText}>No results found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
  },
  resultsList: {
    marginTop: 20,
  },
  resultItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
  noResultsText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SearchScreen;

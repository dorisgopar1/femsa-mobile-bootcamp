import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUserProfiles } from './hooks/useUserProfiles';
import _ from 'lodash';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UserProfileApp />
        </QueryClientProvider>
    );
};

const UserProfileApp = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { users, error, isLoading, isError } = useUserProfiles();

    const debouncedSearch = useCallback(
        _.debounce((text: string) => {
            setSearchTerm(text);
        }, 500),
        []
    );

    const filteredUsers = users?.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (isLoading) {
        return (
            <View style={styles.center}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>Error: {error?.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search users by name"
                onChangeText={debouncedSearch}
            />

            <FlatList
                data={filteredUsers}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemText}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        paddingLeft: 8,
        marginBottom: 16,
        borderRadius: 5,
    },
    itemContainer: {
        marginVertical: 8,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    itemText: {
        fontSize: 18,
    },
    errorText: {
        fontSize: 16,
        color: 'red',
    },
});

export default App;

import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'user_profiles';

export const saveUsersToStorage = async (users: any[]) => {
    try {
        const jsonValue = JSON.stringify(users);
        await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (error) {
        console.error('Error saving users to AsyncStorage:', error);
    }
};
export const getUsersFromStorage = async (): Promise<any[] | null> => {
    try {
        const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.error('Error fetching users from AsyncStorage:', error);
        return null;
    }
};
export const clearUsersFromStorage = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
        console.error('Error clearing users from AsyncStorage:', error);
    }
};

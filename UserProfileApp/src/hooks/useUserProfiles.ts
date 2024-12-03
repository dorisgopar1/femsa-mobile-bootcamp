import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/ApiService';
import { getUsersFromStorage, saveUsersToStorage } from '../utils/UserStorage';

const fetchUserData = async () => {
    const cachedUsers = await getUsersFromStorage();
    if (cachedUsers) {
        return cachedUsers;
    }

    const fetchedUsers = await fetchUsers();
    await saveUsersToStorage(fetchedUsers);
    return fetchedUsers;
};

export const useUserProfiles = () => {
    const { data: users, error, isLoading, isError, refetch } = useQuery(
        ['users'],
        fetchUserData,
        {
            retry: 3,
                console.error('Error fetching data:', err);
            },
        }
    );

    return { users, error, isLoading, isError, refetch };
};

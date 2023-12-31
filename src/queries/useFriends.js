import { useQuery } from '@tanstack/react-query';
import apiFriends from '../services/apiFriends';
import useAuth from '../hooks/useAuth';

export function useFriends() {
  const { user } = useAuth();
  const token = user?.token;

  const friendsQuery = useQuery({
    queryKey: ['userFriends'],
    queryFn: async () => {
      const friends = await apiFriends(token);
      return friends;
    },
    enabled: !!token,
  });

  const { data: userFriends } = friendsQuery;

  return { userFriends };
}

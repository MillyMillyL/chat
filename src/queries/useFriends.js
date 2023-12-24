import { useQuery } from '@tanstack/react-query';
import apiFriends from '../services/apiFriends';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useFriends() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const token = user?.token;
  console.log(token);

  const friendsQuery = useQuery({
    queryKey: ['userFriends'],
    queryFn: async () => {
      console.log(token);
      const friends = await apiFriends(token);
      return friends;
    },
    enabled: !!token,
  });

  const { data: userFriends } = friendsQuery;

  return { userFriends };
}

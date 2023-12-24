import { useQuery } from '@tanstack/react-query';
import apiFriends from '../services/apiFriends';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function useFriends() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const token = user?.token;
  console.log(token);

  const friendsQuery = useQuery({
    queryKey: ['userFriends'],
    queryFn: () => {
      console.log(token);
      apiFriends(token);
    },
    enabled: !!token,
  });

  console.log(friendsQuery.data, friendsQuery.error);

  return friendsQuery.data;
}

export default useFriends;

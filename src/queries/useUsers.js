import { useQuery } from '@tanstack/react-query';
import apiUsers from '../services/apiUsers';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useUsers() {
  const { user } = useContext(AuthContext);
  const token = user?.token;

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: () => apiUsers(token),
    enabled: !!token,
  });

  return users;
}

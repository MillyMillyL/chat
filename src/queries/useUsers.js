import { useQuery } from '@tanstack/react-query';
import apiUsers from '../services/apiUsers';
import useAuth from '../hooks/useAuth';

export function useUsers() {
  const { user } = useAuth();
  const token = user?.token;

  const { data: users } = useQuery({
    queryKey: ['users'],
    queryFn: () => apiUsers(token),
    enabled: !!token,
  });

  return users;
}

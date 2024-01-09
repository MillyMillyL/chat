import { useQuery } from '@tanstack/react-query';
import { apiUserInfo } from '../services/apiUserInfo';
import useAuth from '../hooks/useAuth';

export function useUserInfo() {
  const { user } = useAuth();
  // const token = user?.token;

  const {
    data: userInfo,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => apiUserInfo(user),
    enabled: !!user.token,
  });

  return { userInfo, isLoading, isError, error };
}

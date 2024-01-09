import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiUserInfor } from '../services/apiUserInfo';
import useAuth from '../hooks/useAuth';

export function useUserInfo() {
  const { user } = useAuth();
  const token = user?.token;

  const { data: userInfo } = useQuery({
    queryKey: ['userInfo'],
    queryFn: () => apiUserInfor(user),
    enabled: !!token,
  });

  return userInfo;
}

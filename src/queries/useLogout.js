import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signChatOut } from '../services/apiAuth';
import useAuth from '../hooks/useAuth';

export function useLogout() {
  const queryClient = useQueryClient();
  const { setIsLoggedIn, setUser, user } = useAuth();

  const logoutMutate = useMutation({
    mutationFn: () => signChatOut(user.token),
    onSuccess: () => {
      queryClient.removeQueries('user');
      setIsLoggedIn(false);
      setUser(null);
    },
  });

  const { mutate: LogOut } = logoutMutate;

  return { LogOut };
}

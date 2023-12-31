import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signChatOut } from '../services/apiAuth';

export function useLogout() {
  const queryClient = useQueryClient();

  const logoutMutate = useMutation({
    mutationFn: () => signChatOut,
    onSuccess: () => {
      queryClient.removeQueries('user');
    },
  });

  const { mutate: LogOut } = logoutMutate;

  return { LogOut };
}

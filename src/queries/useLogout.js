import { useMutation, useQueryClient } from '@tanstack/react-query';
import { signChatOut } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const logoutMutate = useMutation({
    mutationFn: () => signChatOut,
    onSuccess: () => {
      queryClient.removeQueries('user');
      setUser(null);
      navigate('/');
    },
  });

  const { mutate: LogOut } = logoutMutate;

  return { LogOut };
}

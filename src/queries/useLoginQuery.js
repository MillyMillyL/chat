import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

import {
  remoteLogin,
  refreshLogin as remoteRefreshLogin,
} from '../services/apiAuth';

export function useLoginQuery() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser, setIsLoggedIn } = useAuth();

  const loginMutate = useMutation({
    mutationFn: async (logindata) => remoteLogin(logindata),
    onSuccess: (data) => {
      console.log(data);
      setUser(data);
      queryClient.setQueryData(['user'], data);
      navigate('/chat', { replace: true });
    },
    onError: (error) => {
      toast.error('Login unsuccessfull, please check and retry', error);
    },
  });
  const { mutate: login } = loginMutate;

  const refreshLoginMutate = useMutation({
    mutationFn: remoteRefreshLogin,
    onSuccess: (data) => {
      setIsLoggedIn(true);
      setUser(data);
      queryClient.setQueryData(['user'], data);
    },
    onError: (error) => {
      setIsLoggedIn(false);
      setUser(error);
    },
  });

  const { mutate: refreshLogin, isPending } = refreshLoginMutate;

  return { login, refreshLogin, isPending, refreshLoginMutate };
}

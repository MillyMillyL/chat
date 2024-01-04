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
      setUser(data);
      queryClient.setQueryData(['user'], data);
      navigate('/chat', { replace: true });
    },
  });
  const {
    mutate: login,
    error: loginError,
    isError: isLoginError,
  } = loginMutate;

  const refreshLoginMutate = useMutation({
    mutationFn: remoteRefreshLogin,
    onSuccess: (data) => {
      setIsLoggedIn(true);
      setUser(data);
      queryClient.setQueryData(['user'], data);
    },
    onError: () => {
      setIsLoggedIn(false);
      toast.error('You are not logged in');
      navigate('/signin');
    },
  });

  const { mutate: refreshLogin } = refreshLoginMutate;

  return { login, isLoginError, loginError, refreshLogin };
}

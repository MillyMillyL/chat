import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import {
  remoteLogin,
  refreshLogin as remoteRefreshLogin,
} from '../services/apiAuth';

export function useLoginQuery() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const { setUser, setIsLoggedIn } = useAuth();

  const loginMutate = useMutation({
    mutationFn: async (logindata) => remoteLogin(logindata),
    onSuccess: (data) => {
      setUser(data);
      queryClient.setQueryData(['user'], data);
      console.log(from);
      navigate(from, { replace: true });
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
    onError: (err) => {
      setIsLoggedIn(false);
      toast.error(err.message);
      navigate('/signin');
    },
  });

  const {
    mutate: refreshLogin,
    isError: isRefreshLoginError,
    error: refreshLoginError,
  } = refreshLoginMutate;

  return {
    login,
    isLoginError,
    loginError,
    refreshLogin,
    isRefreshLoginError,
    refreshLoginError,
  };
}

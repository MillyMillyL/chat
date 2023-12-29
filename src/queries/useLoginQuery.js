import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import toast from 'react-hot-toast';

import {
  remoteLogin,
  refreshLogin as remoteRefreshLogin,
} from '../services/apiAuth';

import { AuthContext } from '../context/AuthContext';

export function useLoginQuery() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

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
      setUser(data);
      queryClient.setQueryData(['user'], data);
    },
  });
  const { mutate: refreshLogin } = refreshLoginMutate;

  return { login, refreshLogin };
}

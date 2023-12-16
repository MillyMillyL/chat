import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { remoteLogin } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
// import { useState } from 'react';

export function useLoginQuery() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // const {
  //   data,
  //   mutate: login,
  //   isLoading: isLoggingIn,
  // } = useMutation({
  //   mutationFn: (logindata) => remoteLogin(logindata),
  //   onSuccess: (data) => {
  //     queryClient.setQueryData(['user'], data);
  //     navigate('/chat', { replace: true });
  //     toast.success(`${data.userId} successfully logged in`);
  //   },
  //   onError: (error) => {
  //     console.log('Login error', error);
  //     toast.error('Login unsuccessfull, please check and retry');
  //   },
  // });

  return useQuery({
    queryKey: ['user'],
    queryFn: (logindata) => remoteLogin(logindata),
  });

  console.log(data, login, isLoggingIn);

  return { data, login, isLoggingIn };
}

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { remoteLogin } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useLoginQuery() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const loginMutate = useMutation({
    mutationFn: (logindata) => remoteLogin(logindata),
    onSuccess: (data) => {
      setUser(data);
      queryClient.setQueryData(['user'], data);
      navigate('/chat', { replace: true });
      toast.success(`${data.userId} successfully logged in`);
    },
    onError: (error) => {
      console.log('Login error', error);
      toast.error('Login unsuccessfull, please check and retry');
    },
  });

  const { mutate: login } = loginMutate;

  // console.log(login);

  // const loginQuery = useQuery({
  //   queryKey: ['user'],
  //   queryFn: remoteLogin,
  // });

  // const { data: loggedUser, isLoading: isLoggingIn } = loginQuery;

  return { login };
}
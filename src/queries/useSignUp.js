import { useMutation } from '@tanstack/react-query';

import { apiSignUp } from '../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signUp } = useMutation({
    mutationFn: ({ userId, password }) => apiSignUp({ userId, password }),
    onSuccess: () => {
      navigate('/signin');
    },
  });
  return signUp;
}

import { useMutation } from '@tanstack/react-query';
import { apiSignUp } from '../services/apiAuth';

export function useSignUp() {
  const { mutateAsync: signUp } = useMutation({
    mutationFn: ({ userId, password }) => apiSignUp({ userId, password }),
  });

  return { signUp };
}

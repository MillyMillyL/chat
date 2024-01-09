import { useMutation } from '@tanstack/react-query';
import { apiSignUp } from '../services/apiAuth';

export function useSignUp() {
  const {
    mutateAsync: signUp,
    isError,
    error,
  } = useMutation({
    mutationFn: ({ userId, password }) => apiSignUp({ userId, password }),
  });

  return { signUp, isError, error };
}

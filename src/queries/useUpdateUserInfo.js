import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiUpdateUserInfo } from '../services/apiUpdateUserInfo';
import toast from 'react-hot-toast';

export function useUpdateUserInfo() {
  const queryClient = useQueryClient();
  const updateUserInfoMutate = useMutation({
    mutationFn: apiUpdateUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries('userInfo');
      toast.success('User info updated successfully');
    },
  });

  const { mutate: updateUserInfo } = updateUserInfoMutate;

  return updateUserInfo;
}

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiSendMsg } from '../services/apiSendMsg';

export function useSendMsg() {
  const queryClient = useQueryClient();

  const sendMsgMutate = useMutation({
    mutationFn: ({ user, body }) => apiSendMsg({ user, body }),
    onSuccess: (variables) => {
      queryClient.invalidateQueries(['chats', variables.toUserId]);
    },
  });

  const sendMsg = sendMsgMutate.mutate;

  return { sendMsg };
}

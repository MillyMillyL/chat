import { useQuery } from '@tanstack/react-query';
import apiChat from '../services/apiChat';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useChat(friendId) {
  const { user } = useContext(AuthContext);
  const token = user?.token;

  const { data: friendChat } = useQuery({
    queryKey: ['chats', friendId],
    queryFn: async () => {
      const chats = await apiChat(token);
      const friendChat = chats
        ?.filter(
          (message) =>
            message?.fromUserId === friendId || message?.toUserId === friendId,
        )
        .slice()
        .sort((a, b) => a.sendAt - b.sendAt);

      return friendChat;
    },
    enabled: !!token,
  });

  return friendChat;
}

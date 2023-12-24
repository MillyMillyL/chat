import { useQuery } from '@tanstack/react-query';
import apiChat from '../services/apiChat';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useChat() {
  const { user } = useContext(AuthContext);
  const token = user?.token;

  const chatsQuery = useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
      const chats = await apiChat(token);
      return chats;
    },
    enabled: !!token,
  });

  const { data: chats } = chatsQuery;

  return { chats };
}

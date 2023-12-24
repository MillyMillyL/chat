async function apiChat(token) {
  try {
    const res = await fetch('api/ChatMessage/GetUserChatMessage', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const data = await res.json();

    return data.data;
  } catch (error) {
    alert(error);
  }
}

export default apiChat;

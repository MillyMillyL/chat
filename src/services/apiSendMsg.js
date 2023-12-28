export async function apiSendMsg({ user, body }) {
  try {
    const res = await fetch('api/ChatMessage/SendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: user?.token,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();

    return data.data;
  } catch (error) {
    alert(error);
  }
}

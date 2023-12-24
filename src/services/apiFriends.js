async function apiFriends(token) {
  try {
    const res = await fetch('/api/UserFriend/GetUserFriends', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        userId: 'aaa',
        blocked: false,
      }),
    });

    const data = await res.json();

    return data.data;
  } catch (error) {
    alert(error);
  }
}

export default apiFriends;

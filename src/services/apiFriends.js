const apiFriends = async (token) => {
  console.log('api friends started', token);
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
    console.log(data.data);
    return data.data;
  } catch (error) {
    alert(error);
  }
};

export default apiFriends;

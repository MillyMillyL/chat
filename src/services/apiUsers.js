async function apiUsers(token) {
  const res = await fetch('/api/User/SearchFriend', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    body: JSON.stringify({
      searchKeyword: '',
    }),
  });

  const data = await res.json();
  return data.data;
}

export default apiUsers;

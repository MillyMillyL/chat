export async function apiUserInfor(user) {
  const res = await fetch(`/api/User/GetUserInfo?userId=${user.userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: user.token,
    },
  });

  const data = await res.json();
  return data.data;
}

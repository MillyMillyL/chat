async function remoteLogin(loginData) {
  const { userId, password } = loginData;

  const res = await fetch('/api/User/SignIn', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      password,
      keepLoggedIn: true,
    }),
  });

  const data = await res.json();
  console.log(data);
  return data.data;
}

export default remoteLogin;

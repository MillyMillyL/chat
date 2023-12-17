export async function remoteLogin(loginData) {
  const { userId, password } = loginData;

  try {
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

    if (!res.ok) {
      throw new Error(`Failed to Loggin. Status: ${res.status}`);
    }

    const data = await res.json();

    return data.data;
  } catch (error) {
    console.error('Error Logging in: ', error.message);
    throw error;
  }
}

export async function refreshLogin() {
  const requestOptions = {
    method: 'PUT',
    mode: 'same-origin', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin',
  };

  const request = new Request('/api/User/RefreshSignIn', requestOptions);
  const response = await fetch(request);

  const data = await response.json();

  return data.data;
}

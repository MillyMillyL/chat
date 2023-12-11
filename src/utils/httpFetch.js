export async function httpFetch(token, setToken, method, data = null, url) {
  const myHeaders = new Headers({
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${token}`,
  });

  const requestOptions = {
    method: method ?? 'POST',
    headers: myHeaders,
    mode: 'same-origin', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin',
  };

  if (data != null) requestOptions['body'] = JSON.stringify(data);

  const requestFirst = new Request(url, requestOptions);

  let response = await fetch(requestFirst);
  if (response.ok) return response;

  if (response.status === 401 && url !== '//api/User/SignIn') {
    response = await refreshToken();

    if (response.ok) {
      let result = await response.json();
      let newToken = result?.data?.token;
      setToken(newToken);

      //fetch-retry with new token
      myHeaders.set('Authorization', `Bearer ${newToken}`);
      const requestRetry = new Request(url, requestOptions);

      response = await fetch(requestRetry);
      if (response.ok) return response;
    }
  }
}

export async function refreshToken() {
  const requestOptions = {
    method: 'PUT',
    mode: 'same-origin', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin',
  };

  const request = new Request('/api/User/RefreshSignIn', requestOptions);
  const response = await fetch(request);

  return response;
}

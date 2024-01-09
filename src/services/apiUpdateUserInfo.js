export async function apiUpdateUserInfo({ user, newUserInfo }) {
  await fetch('/api/User/UpdateUserInfo', {
    method: 'PUT',
    mode: 'same-origin', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin',
    headers: { 'content-type': 'application/json', Authorization: user.token },
    body: JSON.stringify(newUserInfo),
  });
}

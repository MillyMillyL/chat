export async function apiUpdateUserInfo(newUserInfo) {
  await fetch('/api/User/UpdateUserInfo', {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newUserInfo),
  });
}

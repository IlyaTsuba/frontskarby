
function* getToken() {
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh')
  const tokenLocal = {
    token: accessToken
  }
  const tokenRefresh = {
    refresh: refreshToken
  }
  const response = yield fetch('http://127.0.0.1:8000/swagger/auth/jwt/verify/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(tokenLocal)
  })
  if (response.status === 200) {
    return accessToken
  } else {
    const response = yield fetch('http://127.0.0.1:8000/swagger/auth/jwt/refresh/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(tokenRefresh)
    })
    const data = yield response.json()
    localStorage.setItem('access', data.access)
    return data.access
  }
}

export {getToken}
export const loadToken = () => {
  return localStorage.getItem('token');
};

export const storeToken = token => {
  try {
    localStorage.setItem('token', token);
  }
  catch(e) {}
};

export const removeToken = () => {
  try {
    localStorage.removeItem('token');
  }
  catch(e) {}
};




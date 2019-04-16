export const normalizeResponse = res => {
  if(!res.ok) {
    if(
      res.headers.has('content-type') && 
      res.headers.get('content-type').startsWith('application/json')
    ) {
      
       return res.json().then(err => Promise.reject(err)) 
      }
      return Promise.reject({
        code: res.status,
        message: res.statusText
      })
    }
    return res.json()
};



export const distinguishAuthFormat = v => {
  let len = Object.keys(v).length

  let loginValues = {
    username: v.username,
    password: v.password
  };

  let newUserValues = {
    firstname: v.firstname,
    lastname: v.lastname,
    username: v.username,
    password: v.password,
    contact: v.email
  }

  let login = {
    load: loginValues,
    route: ''
  };

  let create = {
    load: newUserValues,
    route: '/newUser'
  };

  return len === 2 ?
  login:
  create
}

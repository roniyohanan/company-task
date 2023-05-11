import { useContext, useState } from 'react'
import { UserContext } from "./userContext";
import { Navigate } from 'react-router-dom';
import UsersService from '../services/users.service'

export function LoginPage() {
  const [username, setUsername] = useState('');
  const { setUserinfo, userinfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);

  const login = async () => {
    try {
      const credit = await UsersService.getByUserName(username);
      const user = { username, credit }
      setUserinfo(user);
      setRedirect(true);
    } catch {
      alert('login faild')
    }
  }

  return (
    redirect ? <Navigate to={"/allcompanies"} /> :
      (<form onSubmit={login}>
        <h1>Login</h1>
        <input type="text" placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)} />
        <button>Login</button>
      </form>)
  );
}
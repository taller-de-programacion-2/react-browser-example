import Login from './screens/login/Login';
import Home from './screens/home/Home';
import './App.css';
import { useEffect, useState } from 'react';

// Importante discutir: "can't update unmounted component"
const App = () => {
  const [token, setToken] = useState();

  const updateToken = (token) => {
    localStorage.setItem('token', token)
    setToken(token)
  };

  const doLogout = () => {
    localStorage.removeItem('token')
    setToken('')
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
    return () => { }
  }, []);

  return (<>
    {token ?
      <Home token={token} logout={doLogout} /> :
      <Login onLogin={updateToken} />
    }
  </>
  );
}

export default App;

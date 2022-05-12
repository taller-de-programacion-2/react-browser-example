import { useState } from "react";
import login from "./service"
import "../../styles/login.scss";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [token, setToken] = useState('')
    const [loading, setLoading] = useState(false)
    const doLogin = async (_) => {
        setLoading(true)
        try {
            const { token } = await login({ email, password })
            setToken(token)
        } catch (e) {
            setError(e.message)
        }
        setLoading(false)
    }
    const updateEmail = (e) => {
        setEmail(e.target.value)
        setError('')
    }
    const updatePassword = (e) => {
        setPassword(e.target.value)
        setError('')
    }
    return (
        <div className="container">
            <div className="inner-wrapper">
            <h1>Users</h1>
            {token &&
                <div style={{ backgroundColor: 'green' }}>
                    Succesful login, token: {token}
                </div>
            }
            <div style={{ backgroundColor: 'red' }}>
                {error}
            </div>
            {loading && <div style={{ backgroundColor: 'yellow' }}>
                Loading ...
            </div>}
           
            {/* <p>See other users profiles</p> */}
            <div className="form">
                <div className="form-control">
                    <label>Email</label>
                    <input type="text"
                        onChange={updateEmail}
                        disabled={loading} 
                        name='email'/>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password"
                        onChange={updatePassword}
                        disabled={loading}
                        name='password' />
                </div>
                <div className="button-wrapper">
                    <button onClick={doLogin} disabled={loading}>
                        Log In
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Login;
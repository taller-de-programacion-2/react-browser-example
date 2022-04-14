import { useState } from "react";
import login from "./service"

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
        <div>
            <h1>Users</h1>
            <p>See other users profiles</p>
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
            <div>
                <div>
                    <span>email:</span>
                    <input type="text"
                        onChange={updateEmail}
                        disabled={loading} 
                        name='email'/>
                </div>
                <div>
                    <span>password:</span>
                    <input type="password"
                        onChange={updatePassword}
                        disabled={loading}
                        name='password' />
                </div>
                <div>
                    <button onClick={doLogin}
                        disabled={loading}>
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
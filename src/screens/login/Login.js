import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const doLogin = (_) => console.log({ email, password })
    const updatePassword = (e) => setPassword(e.target.value)
    return (
        <div>
            <h1>Users</h1>
            <p>See other users profiles</p>
            <div>
                <div>
                    <span>email:</span>
                    <input type="text"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <span>password:</span>
                    <input type="password"
                        onChange={updatePassword} />
                </div>
                <div>
                    <button onClick={doLogin}>
                        Log In
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
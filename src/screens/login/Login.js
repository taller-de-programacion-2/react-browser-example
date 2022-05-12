import { useState } from "react";
import "../../styles/login.scss";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const doLogin = (_) => console.log({ email, password })
    const updatePassword = (e) => setPassword(e.target.value)
    return (
        <div className="container">
            <div className="inner-wrapper">
            <h1>Users</h1>
            {/* <p>See other users profiles</p> */}
            <div className="form">
                <div className="form-control">
                    <label>Email</label>
                    <input type="text"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password"
                        onChange={updatePassword} />
                </div>
                <div className="button-wrapper">
                    <button onClick={doLogin}>
                        Log In
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Login;
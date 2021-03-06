import Login from "./screens/login/Login";
import Home from "./screens/home/Home";
import About from "./screens/about/About";
import {
  SessionProvider,
  WithSession,
  WithoutSession,
} from "./contexts/auth/Auth";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => (
  <SessionProvider>
    <WithSession>
      <div>
        <div className="links">
          <nav>
            <span style={{ marginRight: "1em" }}>
              <Link to="/">home</Link>
            </span>
            <span>
              <Link to="/about">about</Link>
            </span>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </WithSession>
    <WithoutSession>
      <Login />
    </WithoutSession>
  </SessionProvider>
);

export default App;

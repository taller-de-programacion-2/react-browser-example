import { useEffect } from "react";
import { useSession } from "../../contexts/auth/Auth";
import Listing from "../../components/listing/Listing";
import userService from "../../services/users";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

function Home() {
  const session = useSession();
  useEffect(() => {
    return () => {
      console.log("Home: clean up");
    };
  }, []);
  return (
    <div className="home-container">
      <div className="menu">
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
        <div className="greetings">
          <div>Token: {session.token}</div>
          <span>Welcome Home!</span>
          <button onClick={session.logout}>Log out</button>
        </div>
      </div>
      <div className="inner-wrapper">
        <Listing fetchPage={userService.listUsers} />
      </div>
    </div>
  );
}

export default Home;

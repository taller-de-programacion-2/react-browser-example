import { useEffect } from "react";
import { useSession } from "../../contexts/auth/Auth";
import Listing from "../../components/listing/Listing";
import { Link } from "react-router-dom";

import "../../styles/home.scss";

function Home() {
  const session = useSession();
  const UserCard = ({ item }) => (
    <div>
      {item.first_name} / {item.email}
      <img src={item.avatar} alt={item.email} />
    </div>
  );

  useEffect(() => {
    return () => {
      console.log("Home: clean up");
    };
  }, []);

  return (
    <div className="container">
      <div className="inner-wrapper">
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
          <div>Token: {session.token}</div>
          <div className="greetings">
            <span>Welcome Home!</span>
            <button onClick={session.logout}>Log out</button>
          </div>
          <Listing ItemComponent={UserCard} fetchPage={listUserAdapter} />
        </div>
      </div>
    </div>
  );
}

export default Home;

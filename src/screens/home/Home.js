import { useEffect } from "react";
import { useSession } from "../../contexts/auth/Auth";
import Listing from "../../components/listing/Listing";
import { Link } from "react-router-dom";
import usersService from "../../services/users";
import "../../styles/home.scss";

function Home() {
  const session = useSession();
  const UserCard = ({ item }) => (
    <div>
      {item.first_name} / {item.email}
      <img src={item.avatar} alt={item.email} />
    </div>
  );

  const listUserAdapter = async (page) => {
    const { data, total_pages } = await usersService.listUsers(page);
    return { data, total: total_pages };
  };

  useEffect(() => {
    return () => {
      console.log("Home: clean up");
    };
  }, []);

  return (
    <div className="home-container">
      <div>
        <div className="menu">
          <div>Token: {session.token}</div>
          <div className="greetings">
            <span>Welcome Home!</span>
            <button onClick={session.logout}>Log out</button>
          </div>
          <div>
            <Listing ItemComponent={UserCard} fetchPage={listUserAdapter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

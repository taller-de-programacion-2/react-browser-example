import { useEffect } from "react";
import Listing from "../../components/listing/Listing";
import userService from "../../services/users";
import "../../styles/home.scss";

const UserCard = ({ item }) => (
  <div>
    {item.first_name} / {item.email}
    <img src={item.avatar} alt={item.email} />
  </div>
);

const Home = () => {
  useEffect(() => {
    return () => {
      console.log("Home: clean up");
    };
  }, []);
  return (
    <div className="home-container">
      <div className="inner-wrapper">
        <Listing ItemComponent={UserCard} fetchPage={userService.listUsers} />
      </div>
    </div>
  );
};

export default Home;

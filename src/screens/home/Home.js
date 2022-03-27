import { useEffect, useState } from "react";
import { listUsers } from "./service";

import "../../styles/home.scss";

function Home({ token, logout }) {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  const fetchPage = async (page) => {
    const { data, total_pages } = await listUsers(page);
    setPage(page);
    setTotal(total_pages);
    setUsers(data);
  };

  const UserPages = () => {
    const nextPage = () => fetchPage(page + 1);
    const prevPage = () => fetchPage(page - 1);

    return (
      <div className="users-list-wrapper">
        <ul>
          {users.map((user) => (
            <li className="users-list" key={user.id}>
              <img src={user.avatar} />
              <span>
                {user.first_name} / {user.email}
              </span>
            </li>
          ))}
        </ul>
        <div className="buttons-wrapper">
          <button onClick={prevPage} disabled={page === 1}>
            prev
          </button>
          {page}
          <button onClick={nextPage} disabled={page === total}>
            next
          </button>
        </div>
      </div>
    );
  };
  useEffect(() => {
    console.log(`fetching ${page}`);
    fetchPage(page);
  }, [page]);

  useEffect(() => {
    return () => {
      console.log("Home: clean up");
    };
  }, []);
  return (
    <div className="home-container">
      <div className="menu">
        <div className="greetings">
          <span>Welcome Home!</span>
          <div>Token: {token}</div>
          <button onClick={logout}>Log out</button>
        </div>
      </div>
      <div className="inner-wrapper">
        <UserPages />
      </div>
    </div>
  );
}

export default Home;

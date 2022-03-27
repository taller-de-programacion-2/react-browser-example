import { useEffect, useState } from "react";
import { listUsers } from './service'

function Home({ token, logout }) {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);

    const fetchPage = async (page) => {
        const { data, total_pages } = await listUsers(page);
<<<<<<< HEAD
=======
        setPage(page)
>>>>>>> 0af5b68 (Use localstorage to remember token)
        setTotal(total_pages);
        setUsers(data);
    };

    const UserPages = () => {
<<<<<<< HEAD
        const nextPage = () => setPage(page + 1);
        const prevPage = () => setPage(page - 1)
=======
        const nextPage = () => fetchPage(page + 1);
        const prevPage = () => fetchPage(page - 1)
>>>>>>> 0af5b68 (Use localstorage to remember token)
        return <div>
            <ul>
                {users.map(user => <li key={user.id}>
                    {user.first_name} / {user.email}
                    <img src={user.avatar} />
                </li>)
                }
            </ul>
            <button onClick={prevPage} disabled={page === 1}>
                prev
            </button>
            {page}
            <button onClick={nextPage} disabled={page === total}>
                next
            </button>
        </div>
    }
    useEffect(() => {
<<<<<<< HEAD
        console.log(`fetching ${page}`);
        fetchPage(page);
    }, [page]);

    useEffect(() => {
        return () => {
            console.log("Home: clean up");
        }
    }, [])
=======
        fetchPage(1)
        return () => { }
    }, []);
>>>>>>> 0af5b68 (Use localstorage to remember token)
    return (
        <div>
            <div style={{ backgroundColor: 'green' }}>
                Token: {token}
            </div>
            <div>
                <span>
                    Welcome Home!
                    <button onClick={logout}>Log out</button>
                </span>
            </div>
            <UserPages />
        </div>
    );
}

export default Home;
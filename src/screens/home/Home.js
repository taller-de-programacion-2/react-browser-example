import { useEffect, useState } from "react";
import { listUsers } from './service'
import {useSession} from '../../contexts/auth/Auth';


function Home() {
    const session = useSession()
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);

    const fetchPage = async (page) => {
        const { data, total_pages } = await listUsers(page);
        setTotal(total_pages);
        setUsers(data);
    };

    const UserPages = () => {
        const nextPage = () => setPage(page + 1);
        const prevPage = () => setPage(page - 1);
        return <div>
            <ul>
                {users.map(user => <li key={user.id}>
                    {user.first_name} / {user.email}
                    <img src={user.avatar} alt={user.email}/>
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
        console.log(`fetching ${page}`);
        fetchPage(page);
    }, [page]);

    useEffect(() => {
        return () => {
            console.log("Home: clean up");
        }
    }, [])

    return (
        <div>
            <div style={{ backgroundColor: 'green' }}>
                Token: {session.token}
            </div>
            <div>
                <span>
                    Welcome Home!
                    <button onClick={session.logout}>Log out</button>
                </span>
            </div>
            <UserPages />
        </div>
    );
}

export default Home;
<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect } from "react";
import usersService from '../../services/users'
import { useSession } from '../../contexts/auth/Auth';
import Listing from "../../components/listing/Listing";
=======
import { useEffect, useState } from "react";
import { listUsers } from './service'
import {useSession} from '../../contexts/auth/Auth';
>>>>>>> 6752edb (Router+useContext)
=======
import { useEffect } from "react";
import usersService from '../../services/users'
import { useSession } from '../../contexts/auth/Auth';
import Listing from "../../components/listing/Listing";
>>>>>>> ad9d81f (Extract component)


function Home() {
    const session = useSession()
<<<<<<< HEAD
<<<<<<< HEAD

    const UserPages = () =>
        <Listing fetchPage={async (page) => {
            const { data, total_pages } = await usersService.listUsers(page)
            return { data, total: total_pages };
        }} />;
=======
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);

    const fetchPage = async (page) => {
        const { data, total_pages } = await listUsers(page);
        setPage(page)
        setTotal(total_pages);
        setUsers(data);
    };

    const UserPages = () => {
        const nextPage = () => fetchPage(page + 1);
        const prevPage = () => fetchPage(page - 1)

        return (
        <div className="users-list-wrapper">
            <ul>
                {users.map(user => (
                <li className="users-list" key={user.id}>
                    <img src={user.avatar} alt={user.email} />
                    <span>{user.first_name} / {user.email}</span>
                </li>))
                }
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
        </div>)
    }
    useEffect(() => {
        console.log(`fetching ${page}`);
        fetchPage(page);
    }, [page]);
>>>>>>> 6752edb (Router+useContext)
=======

    const UserPages = () =>
        <Listing fetchPage={async (page) => {
            const { data, total_pages } = await usersService.listUsers(page)
            return { data, total: total_pages };
        }} />;
>>>>>>> ad9d81f (Extract component)

    useEffect(() => {
        return () => {
            console.log("Home: clean up");
        }
    }, [])
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
=======

>>>>>>> 4fa69d6 (Use localstorage to remember token)
    return (
        <div className="container">
            <div className="inner-wrapper">
                
            <div className="menu">
                <div>
                    Token: {session.token}
                </div>
                <div className="greetings">
                    <span>
                        Welcome Home!
                    </span>
                    <button onClick={session.logout}>Log out</button>
                </div>
            </div>
                <UserPages />
>>>>>>> cbd746e (tyling)
            </div>
        </div>
    );
}

export default Home;
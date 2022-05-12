import { useEffect } from "react";
import usersService from '../../services/users'
import { useSession } from '../../contexts/auth/Auth';
import Listing from "../../components/listing/Listing";


function Home() {
    const session = useSession()

    const UserPages = () =>
        <Listing fetchPage={async (page) => {
            const { data, total_pages } = await usersService.listUsers(page)
            return { data, total: total_pages };
        }} />;

    useEffect(() => {
        return () => {
            console.log("Home: clean up");
        }
    }, [])
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
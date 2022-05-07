import { useEffect } from "react";
import { listUsers } from './service'
import { useSession } from '../../contexts/auth/Auth';
import Listing from "../../components/listing/Listing";


function Home() {
    const session = useSession();

    const UserCard = ({ item }) => (
        <div>
            {item.first_name} / {item.email}
            <img src={item.avatar}
                alt={item.email} />
        </div>);

    const listUserAdapter = async (page) => {
        const { data, total_pages } = await listUsers(page)
        return { data, total: total_pages };
    }

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
            <Listing
                ItemComponent={UserCard}
                fetchPage={listUserAdapter}
            />
        </div>
    );
}

export default Home;
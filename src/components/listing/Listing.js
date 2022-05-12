import { useEffect, useState } from "react";

import "./styles.scss";

const Listing = ({ fetchPage }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);
    const doFetchPage = async (page) => {
        const { data, total } = await fetchPage(page);
        setTotal(total);
        setData(data);
    };
    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page - 1);

    useEffect(() => {
        console.log(`fetching ${page}`);
        doFetchPage(page);
    }, [page]);

    return (
        <div className="users-list-wrapper">
            <ul className="users-list">
                {data.map(user => <li key={user.id}>
                    <img src={user.avatar} alt={user.email} />
                    {user.first_name} / {user.email}
                </li>)
                }
            </ul>
            <div>
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
}
export default Listing;
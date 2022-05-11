import { useEffect, useState } from "react";

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

    return <div>
        <ul>
            {data.map(user => <li key={user.id}>
                {user.first_name} / {user.email}
                <img src={user.avatar} alt={user.email} />
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
export default Listing;
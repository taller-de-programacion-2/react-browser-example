import { useCallback, useEffect, useState } from "react";

const Listing = ({ fetchPage, ItemComponent }) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(1);

    const doFetchPage = useCallback(async (page) => {
        const { data, total } = await fetchPage(page);
        setTotal(total);
        setData(data);
    }, [fetchPage]);

    const nextPage = () => setPage(page + 1);
    const prevPage = () => setPage(page - 1);

    useEffect(() => {
        console.log(`fetching ${page}`);
        doFetchPage(page);
    }, [page, doFetchPage]);

    return <div>
        <ul>
            {data.map(item =>
                <li key={item.id}>
                    <ItemComponent item={item} />
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
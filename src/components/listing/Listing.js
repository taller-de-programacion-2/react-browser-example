import { useEffect, useState } from "react";
import "./styles.scss";

const Listing = ({ fetchPage, ItemComponent }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  useEffect(() => {
    let isMounted = true;
    const doFetchPage = async (page) => {
      const { data, total } = await fetchPage(page);
      if (isMounted) {
        setTotal(total);
        setData(data);
      }
    };
    console.log(`fetching ${page}`);
    doFetchPage(page);
    return () => {
      isMounted = false;
    };
  }, [page]);

  return (
    <div className="users-list-wrapper">
      <ul className="users-list">
        {data.map((item) => (
          <li key={item.id}>
            <ItemComponent item={item} />
          </li>
        ))}
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
};
export default Listing;

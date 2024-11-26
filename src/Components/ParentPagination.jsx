import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const ParentPagination = () => {
  const [item, setItem] = useState([]);
  const [perpage, setPerpage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setLoading(true);
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setItem(res.data);
      setPerpage(res.data.slice(0, 10));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  }

  const pageHandler = (pageNumber) => {
    setPerpage(item.slice((pageNumber - 1) * 10, pageNumber * 10));
  };

  return (
    <div className="App">
      {loading ? (
        <p className='load'>Loading...</p>
      ) : item.length >= 1 ? (
        <div>
          {perpage.map((post) => (
            <div key={post.id} className='data'>{post.title}</div>
          ))}
          <Pagination data={item} pageHandler={pageHandler} />
        </div>
      ) : (
        <p>No Data Loaded</p>
      )}
    </div>
  );
};

export default ParentPagination;

import React, { useEffect, useState } from 'react';
import Article from '../Article';
import { getAllDocs } from '../../services/db';

const ActicleList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAllDocs('articles').then(articles => {
      console.log(articles);
      setData(articles);
    });
  }, []);

  return (
    <>
      {data.map(d => (
        <Article data={d} key={d.id} />
      ))}
    </>
  );
};

export default ActicleList;

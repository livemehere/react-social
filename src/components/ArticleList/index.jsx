import React from 'react';
import Article from '../Article';
import { useArticles } from '../../hooks/useArticles';

const ActicleList = () => {
  const { data } = useArticles();
  return (
    <>
      {data.map(d => (
        <Article data={d} key={d.id} />
      ))}
    </>
  );
};

export default ActicleList;

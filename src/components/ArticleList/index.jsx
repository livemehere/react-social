import React, { useState } from 'react';
import Article from '../Article';

const ActicleList = () => {
  const [data] = useState([0, 0, 0, 0, 0]);
  return (
    <>
      {data.map((d, idx) => (
        <Article key={idx} />
      ))}
    </>
  );
};

export default ActicleList;

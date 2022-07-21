import { useEffect, useState } from 'react';
import { getAllDocs } from '../services/db';

export function useArticles() {
  const [data, setData] = useState([]);
  useEffect(() => {
    refech();
  }, []);

  const refech = () => {
    getAllDocs('articles').then(articles => {
      setData(articles);
    });
  };

  return { data, refech, setData };
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';
import { items } from './Data';
const SearchItems = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filterData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );
      setFilterData(data);
    };

    filterData();
  }, [term]);

  return <Product items={filterData} />;
};

export default SearchItems;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    if (filterProduct.length > 0) {
      setProduct(filterProduct[0]);
    }
  }, [id]);

  useEffect(() => {
    if (product.category) {
      const relatedProducts = items.filter((item) => item.category === product.category && item.id != id);
      setRelatedProducts(relatedProducts);
    }
  }, [product, id]);

  return (
    <>
      <div className="container">
        <div className="img">
          <img src={product.imgsrc} alt={product.title} />
        </div>
        <div className="text-center">
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mt-3 '>{product.price}</button>
          <button className='btn btn-warning mt-3'>Add to Cart</button>
        </div>
      </div>
      <h1 className='text-center'>Related Product</h1>
      <Product items={relatedProducts} />
    </>
  );
};

export default ProductDetail;

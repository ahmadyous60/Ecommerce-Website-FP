import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart }) => {

  const addToCart = (id, price, title, description, imgsrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgsrc
    };
    setCart([...cart, obj]);
    toast.success('Item Added to Cart!', {
      position: "top-right",
      autoClose: 1499,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1499}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-3">
          {items.map((product) => (
            <div key={product.id} className="col mb-4">
              <div className="card h-100">
                <Link to={`/product/${product.id}`} className="img">
                  <img src={product.imgsrc} className="card-img-top" alt={product.title} />
                </Link>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <button className='btn btn-primary mt-auto'>{product.price}</button>
                  <button 
                    onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgsrc)}
                    className='btn btn-warning mt-2'>Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

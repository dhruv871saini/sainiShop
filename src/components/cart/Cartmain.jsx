import React, { useEffect } from "react";
import "./cart_main.css"; // Ensure the CSS file name matches
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseProduct,
  removeProduct,
  clearCart,
  increaseProduct,
} from "../../feature/productslice";
import { Link } from "react-router-dom";
import Nav from "../nav/Nav";
import { toast } from "react-toastify";

const Cartmain = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIncrease = (id) => {
    dispatch(increaseProduct(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseProduct(id));
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
    toast.success("Product remove successfully")
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <>

    <div className="sticky-top-nav"><Nav /></div>
    <div className="cart-container container-fluid py-4 ">
      <h2 className="text-center mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div><p className="text-center  fw-bold">Your cart is empty</p>
      <p className="text-center fw-bold fs-5 text-danger">  <Link  to="/">Click me  and Add Product first </Link> </p></div>
      ) : (
        <>
         <div class="container-fluid">
          <div class="row">
            <div class="col-md-8 ">
            <ul className="list-unstyled">
            {cart.map((item) => (
              <li key={item.id} className="border border-1 border-dark p-3 mb-3 rounded shadow-sm">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <img src={item.image} alt={item.title} className="img-fluid rounded" />
                  </div>
                  <div className="col-md-6">
                    <h5>{item.title}</h5>
                    <p className=" ">{item.description.substring(0,200)}</p>
                    <div className="d-flex align-items-center">
                      <button
                        onClick={() => handleIncrease(item.id)}
                        aria-label="Increase quantity"
                        className="btn btn-outline-success btn-sm"
                      >
                        <Add />
                      </button>
                      <span className="mx-3 fw-bold">{item.quantity}</span>
                      <button
                        onClick={() => handleDecrease(item.id)}
                        aria-label="Decrease quantity"
                        className="btn btn-outline-danger btn-sm"
                      >
                        <Subtract />
                      </button>
                      <span className="ms-4 fw-bold">
                        {item.price} x {item.quantity} = <span className="text-success">${item.price * item.quantity}</span>
                      </span>
                    </div>
                  </div>
                  <div className="col-md-2 text-center d-flex flex-column justify-content-center">
                    <button
                      onClick={() => handleRemove(item.id)}
                      aria-label="Remove item"
                      className="btn btn-outline-danger"
                    >
                      <Delete />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
            </div>
            <div class="col-md-4">
              lflkfll
            </div>

          </div>
         </div>

          <div className="sticky-bottom text-end mt-3">
            <button
              className="btn sticky-clear bg-warning"
              onClick={handleClear}
              aria-label="Clear cart"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default Cartmain;

// SVG Components
const Add = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path
      d="M12 8V16M16 12L8 12"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" /> */}
  </svg>
);

const Subtract = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
  >
    <path
      d="M16 12H8"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" /> */}
  </svg>
);

const Delete = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15 13.5L13.5 15L12 13.5L10.5 15L9 13.5L10.5 12L9 10.5L10.5 9L12 10.5L13.5 9L15 10.5L13.5 12L15 13.5Z"
      fill="currentColor"
    />
  </svg>
);

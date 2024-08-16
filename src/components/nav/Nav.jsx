import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toggleTheme } from "../../feature/themeslice";
import "./nav.css"

const Nav = () => {
  const [cate, setCate] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCate(res.data))
      .catch((error) => {
        toast.error("Failed to load categories");
        console.error(error);
      });
  }, []);
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Implement your search functionality here
      toast.info(`Searching for "${searchTerm}"`);
    }
  };

  return (
    <div>
      <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-light themos  ">
        <div className="container-fluid ">
          <Link className="navbar-brand themo" to="/">
            MyShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link  fw-bold themo "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fw-bold " to="/cart-main">
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  fw-bold " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  fw-bold  dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   Product Categories
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/?cate_name=All`}>
                      All
                    </Link>
                  </li>
                  {cate.map((item, index) => (
                    <li key={index}>
                      <Link
                        className="dropdown-item"
                        to={`/?cate_name=${item}`}
                        style={{ textTransform: "capitalize" }}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            {/*    <button className="btn btn-outline-light fw-bold" onClick={handleTheme}>
              Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button> */}
            <button
              className={`theme-switch ${theme === "dark" ? "active" : ""} mx-5`}
              onClick={handleTheme}
            >
             <span className="slider round"></span>
            </button>

            <form
              className="d-flex"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

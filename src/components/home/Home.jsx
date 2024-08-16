import React, { useEffect, useMemo, useState } from "react";
import Slider from "./Slider";
// import { useDash } from "../context/dashcontext";
// import Element from "../stickyNav/Element";
import "./home.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { addProduct } from "../../feature/productslice";
import Cart from "../cart/Cart";
// import { useCart } from "../context/cartcontext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Circle from "./Circle";
// import StickyNav from "../stickyNav/StickyNav";
import { useInView } from "react-intersection-observer";
import SectionWithAnimation from "./SectionWithAnimation";
import { toast } from "react-toastify";
import Nav from "../nav/Nav";
// import { Nav } from "react-bootstrap";

const Home = () => {
  // const { addCart } = useCart();
  // const { first, setfirst, second } = useDash();
  // const { setfirst, setsecond } = useDash();
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [first, setfirst] = useState([]);
  const [second, setsecond] = useState("all");
  const [searchParams] = useSearchParams();
  const query = searchParams.get("cate_name");
  const _useNavigate = useNavigate();
  // Memoize categories state
  // const categoriesMemoized = useMemo(() => categories, [categories]);
  const dispatch = useDispatch();
  const addToCardData = (data) => {
    // addCart(data);
    dispatch(addProduct(data));
    toast.success("Item add to cart")
  };

  const gotoProductDetail = (id) => {
    _useNavigate(`/view/${id}`);
  };
  const getAllDataATStarting = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setfirst(res.data);
    });
  };
  useEffect(() => {
    if (query === "All") {
      getAllDataATStarting();
      getAllCategories();
      getAllData();
    } else if (query != null) {
      // getAllDataATStarting()
      // getAllCategories();
      // getAllData()

      getDataByCategoryName(query);
    } else {
      getAllDataATStarting();
      getAllCategories();
      getAllData();
    }
  }, [query]);
  const getAllCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  const getDataByCategoryName = (cate_name) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${cate_name}`)
      .then((res) => {
        setActiveCategory(cate_name === "ALL" ? null : cate_name);
        setfirst(res.data);
        setsecond(cate_name);
      })
      .catch((error) => {
        console.error(
          `Error fetching products for category ${cate_name}:`,
          error
        );
      });
  };

  const getAllData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setfirst(res.data);
      setActiveCategory(null);
      setsecond("all");
    });
  };
  return (
    <div className="overflow">
    <div className="sticky-top-nav">
    <Nav/>
    </div>
      <Slider/> 
    <div>
    {/* <Slider /> */}
    </div>

      <div className="container mt-5">
        <div className="row m-4 ">
          <div className="col-md-4">
            <SectionWithAnimation>
              <div className="d-flex">
                <div className="m-auto">
                  <Shipingcargo />
                </div>
                <div className="fs-5 fw-bold mx-3">
                  Free Shipping And Return
                  <div className="fs-6 text-secondary">
                    Free Shipping On Order Over $299
                  </div>
                </div>
              </div>
            </SectionWithAnimation>
          </div>
          <div className="col-md-4">
            <SectionWithAnimation>
              <div className="d-flex">
                <div className="m-auto">
                  <Calllogo />
                </div>
                <div className="fs-5 fw-bold mx-3">
                  Customer Support 24/7
                  <div className="fs-6 text-secondary">
                    Instant Access To Perfect Support
                  </div>
                </div>
              </div>
            </SectionWithAnimation>
          </div>
          <div className="col-md-4">
            <SectionWithAnimation>
              <div className="d-flex">
                <div className="m-auto">
                  <Securelogo />
                </div>
                <div className="fs-5 fw-bold mx-3">
                  100% Secure Payment
                  <div className="fs-6 text-secondary">
                    We Ensure Secure Payment
                  </div>
                </div>
              </div>
            </SectionWithAnimation>
          </div>
          
        </div>
      </div>

      <div class="sticky-top-category  ">
        {" "}
        <div className="d-flex  flex-wrap justify-content-between  ">
          <div className="m-3">
            <button
              className="btn bg-warning"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#categoryOffcanvas"
              aria-controls="categoryOffcanvas"
            >
              <ElementLogo />
            </button>
            <div
              className="offcanvas offcanvas-start bg-dark "
              tabIndex={-1}
              id="categoryOffcanvas"
              aria-labelledby="categoryOffcanvasLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title text-white"
                  id="categoryOffcanvasLabel"
                >
                  Choose a Category
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white "
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="list-group" style={{ paddingTop: "10%" }}>
                  <li
                    style={{
                      textTransform: "capitalize",
                      listStyle: "none",
                      borderRadius: "1em",
                      marginTop: "2%",
                    }}
                  >
                    <a
                      className={`list-group-item ${
                        activeCategory === null ? "active" : ""
                      }`}
                      onClick={getAllData}
                      style={{ cursor: "pointer" }} // Add cursor style for better UX
                    >
                      ALL
                    </a>
                  </li>
                  {categories.map((item, index) => (
                    <li
                      key={index}
                      style={{
                        textTransform: "capitalize",
                        listStyle: "none",
                        borderRadius: "1em",
                        marginTop: "2%",
                      }}
                    >
                      <button
                        className={`list-group-item ${
                          item === activeCategory ? "active" : ""
                        } text-capitalize`}
                        onClick={() => getDataByCategoryName(item)}
                        style={{
                          textDecoration: "none",
                          textAlign: "left",
                          width: "100%",
                          cursor: "pointer", // Add cursor style for better UX
                        }}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="m-3">
            <Cart />
          </div>
        </div>
      </div>

      {
        <div class="container-fluid text-center fs-2 text-primary">
          <marquee
            behavior="scroll"
            direction="left"
            className="skewed-container "
          >
            Here available {second} product
          </marquee>
        </div>
      }
      <div className="container-fluid m-uto ">
        <div className="row">
          <SectionWithAnimation>
            <div className="col d-flex flex-wrap justify-content-center ">
              {first.map((item, index) => (
                <div
                  className="col-md-3 mb-4  "
                  key={index}
                  style={{ paddingTop: "2%" }}
                >
                  <Card
                    raised
                    sx={{
                      maxWidth: 300,
                      margin: "0 auto",
                      padding: "0.1em",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt="product"
                      height="200"
                      image={item.image}
                      sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{ fontSize: "20px" }}
                      >
                        {item.title.substring(0, 20)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description.substring(0, 60)}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <input
                        type="submit"
                        value="Add To Cart"
                        className="btn btn-success"
                        onClick={() => {
                          addToCardData(item);
                        }}
                      />
                      <span style={{ marginLeft: "28%" }}>
                        <Button
                          variant="contained"
                          size="medium"
                          onClick={() => {
                            gotoProductDetail(item.id);
                          }}
                        >
                          View
                        </Button>
                      </span>
                    </CardActions>
                  </Card>
                </div>
              ))}
            </div>
          </SectionWithAnimation>
        </div>
      </div>
    </div>
  );
};

export default Home;

const ElementLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="32"
      height="32"
      color="#000000"
      fill="none"
    >
      <path
        d="M2 11.4C2 10.2417 2.24173 10 3.4 10H20.6C21.7583 10 22 10.2417 22 11.4V12.6C22 13.7583 21.7583 14 20.6 14H3.4C2.24173 14 2 13.7583 2 12.6V11.4Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M2 3.4C2 2.24173 2.24173 2 3.4 2H20.6C21.7583 2 22 2.24173 22 3.4V4.6C22 5.75827 21.7583 6 20.6 6H3.4C2.24173 6 2 5.75827 2 4.6V3.4Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path
        d="M2 19.4C2 18.2417 2.24173 18 3.4 18H20.6C21.7583 18 22 18.2417 22 19.4V20.6C22 21.7583 21.7583 22 20.6 22H3.4C2.24173 22 2 21.7583 2 20.6V19.4Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};
const Shipingcargo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      fill="none"
      className="injected-svg" // Use className instead of class
      role="img"
      color="#000000"
    >
      <path
        fillRule="evenodd" // Use camelCase for SVG attributes in JSX
        clipRule="evenodd"
        d="M12.0602 3.25H5.09888C4.45963 3.24994 3.88527 3.24989 3.42037 3.31207C2.91282 3.37996 2.39212 3.53758 1.9656 3.9619C1.53908 4.38622 1.38063 4.90423 1.31239 5.40916C1.24989 5.87165 1.24994 6.44304 1.25 7.079L1.25001 14.9558C1.24998 15.3766 1.24995 15.7551 1.27855 16.069C1.30924 16.4059 1.37895 16.7623 1.57733 17.1042C1.79176 17.4737 2.10019 17.7805 2.4716 17.9938C2.81521 18.1912 3.49351 18.2799 3.83216 18.3105C4.24976 19.7207 5.56086 20.75 7.11363 20.75C8.6631 20.75 9.97194 19.725 10.3924 18.3194H13.6075C14.028 19.725 15.3369 20.75 16.8863 20.75C18.4358 20.75 19.7446 19.7251 20.1651 18.3195C21.2749 18.1819 22.5929 17.2935 22.7312 16.1895C22.7502 16.0375 22.7501 15.8713 22.75 15.7016V15.7015V15.7015L22.75 12.9722C22.75 9.09762 19.7122 5.92886 15.8768 5.69447C15.8085 5.18953 15.62 4.38622 15.1935 3.9619C14.767 3.53758 14.2463 3.37996 13.7387 3.31207C13.2738 3.24989 12.6994 3.24994 12.0602 3.25ZM15.9098 14.085C16.2194 13.9934 16.5475 13.9441 16.887 13.9441C18.4365 13.9441 19.7453 14.9691 20.1658 16.3746C20.608 16.3746 20.7961 16.1892 20.7961 15.8886V12.9719C20.7961 10.1826 18.6493 7.89208 15.9098 7.64648V14.085ZM7.11434 15.8886C6.30475 15.8886 5.64844 16.5415 5.64844 17.3469C5.64844 18.1523 6.30475 18.8052 7.11434 18.8052C7.92394 18.8052 8.58025 18.1523 8.58025 17.3469C8.58025 16.5415 7.92394 15.8886 7.11434 15.8886ZM15.4211 17.3469C15.4211 16.5415 16.0774 15.8886 16.887 15.8886C17.6966 15.8886 18.353 16.5415 18.353 17.3469C18.353 18.1523 17.6966 18.8052 16.887 18.8052C16.0774 18.8052 15.4211 18.1523 15.4211 17.3469Z"
        fill="#000000"
      ></path>
    </svg>
  );
};

const Securelogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className="injected-svg"
      role="img"
      color="#000000"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.24989C12 1.24989 11.1614 1.75038 10.9433 1.86589C10.507 2.09706 9.87134 2.41225 9.08277 2.74296C7.50139 3.40618 5.32699 4.12261 2.92537 4.36068L2.25 4.42763V11.0481C2.25 15.0899 4.69955 18.0066 7.0295 19.8671C8.20173 20.8032 9.37002 21.4943 10.2437 21.9514C10.6814 22.1804 12 22.7499 12 22.7499C12 22.7499 13.3186 22.1804 13.7563 21.9514C14.63 21.4943 15.7983 20.8032 16.9705 19.8671C19.3004 18.0066 21.75 15.0899 21.75 11.0481V4.42763L21.0746 4.36068C18.673 4.12261 16.4986 3.40618 14.9172 2.74296C14.1287 2.41225 13.493 2.09706 13.0567 1.86589C12.8386 1.75038 12 1.24989 12 1.24989ZM17.7074 9.70707L11.0003 16.4142L8.29321 13.7071L9.70743 12.2929L11.0003 13.5858L16.2932 8.29286L17.7074 9.70707Z"
        fill="#000000"
      />
    </svg>
  );
};
const Calllogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className="injected-svg"
      role="img"
      color="#000000"
    >
      <path
        d="M5.08213 11.7457C5.94718 13.1708 7.02459 14.5303 8.2473 15.7521C9.46896 16.9746 10.8284 18.0523 12.2531 18.9174L15.831 15.0788L22.7492 19.0189C21.7451 20.8831 19.337 23.2672 16.2776 22.6508C14.8318 22.3591 13.4051 21.8729 11.6798 20.8831C9.94318 19.8868 8.30353 18.6143 6.84677 17.1565C5.38892 15.6997 4.11239 14.056 3.11606 12.3194C2.1262 10.5941 1.64007 9.16735 1.3483 7.72156C0.731986 4.66214 3.11606 2.25408 4.98024 1.25L8.92032 8.16817L5.08213 11.7457Z"
        fill="#000000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.75 6.25H14.25V10.25H12.25V11.25H14.25V12.75H10.75V8.75H12.75V7.75H10.75V6.25ZM16.6071 6.25V8.75H17.25V6.25H18.75V12.75H17.25V10.25H15.1071V6.25H16.6071Z"
        fill="#000000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4584 4.54162C17.0696 2.15279 13.1965 2.15279 10.8077 4.54162C10.7221 4.62725 10.6396 4.71473 10.5602 4.8039L9.43985 3.80645C9.5385 3.69564 9.6409 3.58709 9.74704 3.48096C12.7216 0.506348 17.5444 0.506348 20.519 3.48096C23.4937 6.45556 23.4937 11.2784 20.519 14.253C20.4129 14.3591 20.3044 14.4615 20.1936 14.5601L19.1961 13.4399C19.2853 13.3604 19.3728 13.2779 19.4584 13.1923C21.8472 10.8035 21.8472 6.93044 19.4584 4.54162Z"
        fill="#000000"
      />
    </svg>
  );
};

import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import Scroll from "../../components/Scroll";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { UserContext } from "../../context/userContext";

function BooksPage() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const { decode } = useContext(UserContext);
  const [sort, setSort] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, []);

  function handleSortChange(e) {
    setSort(e.target.value);
  }

  function lower(data) {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    return data;
  }
  return (
    <>
      <div className="booksTitle">
        <h2>BOOKS</h2>
      </div>
      <div className="gray">
        <Link to={"/"}>
          HomePage <span>- Books</span>
        </Link>
      </div>
      <div className="booksSections">
        <div className="books">
          <div className="header">
            <h2>OUR LIBRARY</h2>
            <p>
              Large online bookstores offer used books for sale, too.
              Individuals wishing to sell their used Books
            </p>
          </div>
          {isLoading ? (
            <div className="loaderCenterCards">
              <div className="loader">
                <i className="fa-solid fa-spinner fa-spin"></i>
              </div>
            </div>
          ) : (
            <>
              <div className="select">
                <select
                  name="sortOptions"
                  className="sortOptions"
                  onChange={handleSortChange}
                >
                  <option value="">Filter</option>
                  <option value="AtoZ">A to Z</option>
                  <option value="ZtoA">Z to A</option>
                  <option value="LowtoHigh">Low to High</option>
                  <option value="HightoLow">High to Low</option>
           
                </select>
              </div>
              <div className="cards">
                {books
                  .sort((a, b) => {
                    if (sort === "AtoZ") {
                      return lower(a.title) > lower(b.title) ? 1 : -1;
                    } else if (sort === "ZtoA") {
                      return lower(b.title) > lower(a.title) ? 1 : -1;
                    } else if (sort === "LowtoHigh") {
                      return a.price - b.price;
                    } else if (sort === "HightoLow") {
                      return b.price - a.price;
              
                    } else {
                      return 0;
                    }
                  })
                  .map((x) => (
                    <div className="card" key={x._id}>
                      <div className="image">
                        {decode ? (
                          <>
                            <a href={x.pdf_url}>
                              <img src={x.image} alt="" />
                            </a>
                          </>
                        ) : (
                          <Link to={"/login"}>
                            <a href={x.pdf_url}>
                              <img src={x.image} alt="" />
                            </a>
                          </Link>
                        )}
                        <div className="hover">
                          <div
                            className="cart-shopping"
                            onClick={() => {
                              decode ? addBasket(x) : navigate("/login");
                            }}
                          >
                            <i className="fa-light fa-cart-shopping"></i>
                          </div>
                          <div
                            className="heart"
                            onClick={() => {
                              decode
                                ? addRemoveWishlist(x)
                                : navigate("/login");
                            }}
                          >
                            <i
                              className={`${
                                checkIsWishlist(x)
                                  ? "fa-sharp fa-solid fa-heart"
                                  : "fa-sharp fa-light fa-heart"
                              }`}
                            ></i>
                          </div>
                          {decode ? (
                            <>
                              <Link to={"/bookDetail/" + x._id}>
                                <div className="eye">
                                  <i className="fa-light fa-eye"></i>
                                </div>
                              </Link>
                            </>
                          ) : (
                            <Link to={"/login"}>
                              <div className="eye">
                                <i className="fa-light fa-eye"></i>
                              </div>
                            </Link>
                          )}
                        </div>
                      </div>
                      <div className="text">
                        <h3>{x.title}</h3>
                        <p>${x.price}.00</p>
                      </div>
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
      <Scroll />
    </>
  );
}

export default BooksPage;

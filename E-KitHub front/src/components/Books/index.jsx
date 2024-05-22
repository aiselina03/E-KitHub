import React, { useContext, useEffect, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { UserContext } from "../../context/userContext";

function Books() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const { decode } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0, 4));
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="booksSection">
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
            <div className="cards">
              {books.map((x) => (
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
                          decode ? addRemoveWishlist(x) : navigate("/login");
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
          )}
          <Link to={"/books"}>
            <button> Show All Books</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Books;

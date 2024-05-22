import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { UserContext } from "../../context/userContext";
import "./style.scss";

function BookDetail() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addBasket } = useContext(BasketContext);
  const { addRemoveWishlist, checkIsWishlist } = useContext(WishlistContext);
  const { decode } = useContext(UserContext);
  const navigate = useNavigate();

  let { id } = useParams();
  useEffect(() => {
    fetch("/api/books/" + id)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className="details">
      <div className="detailPage">
        {isLoading ? (
          <div className="loaderCenterCards">
            <div className="loader">
              <i className="fa-solid fa-spinner fa-spin"></i>
            </div>
          </div>
        ) : (
          <div className="detail">
            <div className="image">
              <a href={books.pdf_url}>
                <img src={books.image} alt="" />
                </a>
            </div>
            <div className="info">
              <div className="name">
                <h2>{books.title}</h2>
              </div>
              <div className="stars">
                <i className="fa-sharp fa-solid fa-star fa-fw"></i>
                <i className="fa-sharp fa-solid fa-star fa-fw"></i>
                <i className="fa-sharp fa-solid fa-star fa-fw"></i>
                <i className="fa-sharp fa-solid fa-star fa-fw"></i>
                <i className="fa-sharp fa-regular fa-star"></i>
                <p>(2 customer review)</p>
              </div>
              <div className="price">
                <p>${books.price}.00</p>
              </div>
              <div className="desc">   <p>Author : {books.author}</p>
                  <p>Year: {books.published_year}</p>
                <p className="ingredient">
               
                  Summary: {books.summary}
                </p>
                <p>Janr: {books.genre}</p>
              </div>
              <div className="addWishlist">
                <div
                  className="heart"
                  onClick={() => {
                    decode ? addRemoveWishlist(books) : navigate("/login");
                  }}
                >
                  <i
                    className={`${
                      checkIsWishlist(books)
                        ? "fa-sharp fa-solid fa-heart"
                        : "fa-sharp fa-light fa-heart"
                    }`}
                  ></i>
                  <p>Add to wishlist</p>
                </div>
              </div>
              <div className="text">
                <p>
                  Tags: <Link to={"/"}>E-Kithub</Link> ,
                  <Link to={"/books"}>Book</Link> ,
                  <Link to={"/basket"}>Shoping</Link>
                </p>
              </div>
              <div className="addBasket">
                <button
                  onClick={() => {
                    decode ? addBasket(books) : navigate("/login");
                  }}
                >
                  <i className="fa-regular fa-cart-shopping"></i>ADD TO CART
                </button>
              </div>
              <div className="share">
                <p>SHARE :</p>
                <div className="brands">
                  <a href="https://www.facebook.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="https://www.youtube.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                  <a href="https://twitter.com/?lang=en">
                    <div className="hover"></div>
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="https://az.linkedin.com/">
                    <div className="hover"></div>
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookDetail;

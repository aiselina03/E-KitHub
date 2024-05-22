import React, { useContext } from "react";
import "./style.scss";
import { Link, Navigate } from "react-router-dom";
import Scroll from "../../components/Scroll";
import { BasketContext } from "../../context/basketContext";
import { WishlistContext } from "../../context/wishlistContext";
import { UserContext } from "../../context/userContext";

function Wishlist() {
  const { addBasket } = useContext(BasketContext);
  const { wishlist, addRemoveWishlist } = useContext(WishlistContext);
  const { decode } = useContext(UserContext);

  return (
    <>
      {decode ? (
        <div className="wishlistPage">
          <div className="wishlist">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.map((x) => (
                    <tr key={x._id}>
                      <td>
                        <i
                          className="fa-sharp fa-regular fa-xmark"
                          onClick={() => addRemoveWishlist(x)}
                        ></i>
                      </td>
                      <td>
                        <Link to={"/bookDetail/" + x._id}>
                          <img src={x.image} alt="" />
                        </Link>
                      </td>
                      <td>
                        <h2 className="name">{x.title}</h2>
               
                      </td>
                      <td>${x.price}.00</td>
                      <td>
                        <p>In Stock</p>
                      </td>
                      <td>
                        <button onClick={() => addBasket(x)}>
                          Add to cart
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"}></Navigate>
      )}
      <Scroll/>
    </>
  );
}

export default Wishlist;

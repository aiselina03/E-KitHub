import React, { useContext } from "react";
import "./style.scss";
import { Link, Navigate } from "react-router-dom";

import { BasketContext } from "../../context/basketContext";
import { UserContext } from "../../context/userContext";
import Scroll from "../../components/Scroll";

function Basket() {
  const { basket, removeBasket, decreaseCount, increaseCount, getTotal } =
    useContext(BasketContext);
  const { decode } = useContext(UserContext);

  return (
    <>


      {decode ? (
        <div className="basketPage">
          <div className="basket">
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {basket.map((x) => (
                    <tr key={x._id}>
                      <td>
                        <i
                          className="fa-regular fa-trash-can"
                          onClick={() => removeBasket(x)}
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
                        <i
                          className="fa-sharp fa-thin fa-square-chevron-left"
                          onClick={() => decreaseCount(x)}
                        ></i>
                        {x.count}
                        <i
                          className="fa-sharp fa-thin fa-square-chevron-right"
                          onClick={() => increaseCount(x)}
                        ></i>
                      </td>
                      <td>${x.count * x.price}.00</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={6}>
                      <div className="column">
                        <div className="row">
                          <input type="text" placeholder="COUPON CODE" />
                          <button>APPLY COUPON</button>
                        </div>
                        <button>UPDATE CART</button>
                      </div>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className="checkout">
                <h1>Cart totals</h1>
                <div className="subTotal">
                  <h3>Subtotal</h3>
                  <p>${getTotal()}</p>
                </div>
                <div className="cardTotal">
                  <h3>Total</h3>
                  <p>${getTotal()}</p>
                </div>
                <div>
                  {basket.length ? (
                    <Link to={"/checkout"}>
                      <button>PROCEED TO CHECKOUT</button>
                    </Link>
                  ) : (
                    <Link to={"/shop"}>
                      <button>PROCEED TO CHECKOUT</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"}></Navigate>
      )}
      <Scroll />
    </>
  );
}

export default Basket;

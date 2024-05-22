import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import Scroll from "../../components/Scroll";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { BasketContext } from "../../context/basketContext";
import { UserContext } from "../../context/userContext";

function Checkout() {
  const { basket, getTotal } = useContext(BasketContext);
  const { decode } = useContext(UserContext);
  return (
    <>
      {decode ? (
        <div className="checkoutPage">
          <div className="checkout">
            <div className="billing">
              <h2>Billing details</h2>
              <div className="formik">
                <Formik
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    companyName: "",
                    state: "",
                    country: "",
                    street: "",
                    apartment: "",
                    town: "",
                    zip: "",
                    phone: "",
                    email: "",
                    notes: "",
                  }}
                  validationSchema={Yup.object({
                    firstName: Yup.string().required("Required"),
                    lastName: Yup.string().required("Required"),
                    companyName: Yup.string().required("Required"),
                    state: Yup.string().required("Required"),
                    country: Yup.string().required("Required"),
                    street: Yup.string().required("Required"),
                    apartment: Yup.string().required("Required"),
                    town: Yup.string().required("Required"),
                    zip: Yup.string().required("Required"),
                    phone: Yup.number().required("Required"),
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Required"),
                    notes: Yup.string().required("Required"),
                  })}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    setTimeout(() => {
                      setSubmitting(false);
                      resetForm();
                    }, 400);
                  }}
                >
                  <Form className="form">
                    <div className="row1">
                      <div className="input">
                        <label htmlFor="firstName" className="label">
                          First Name <span>*</span>
                        </label>
                        <Field name="firstName" type="text" className="field" />
                        <ErrorMessage component={"span"} name="firstName" />
                      </div>

                      <div className="input">
                        <label htmlFor="lastName" className="label">
                          Last Name <span>*</span>
                        </label>
                        <Field name="lastName" type="text" className="field" />
                        <ErrorMessage component={"span"} name="lastName" />
                      </div>
                    </div>
                    <div className="input">
                      <label htmlFor="companyName" className="label">
                        Company Name (optional)
                      </label>
                      <Field name="companyName" type="text" className="field" />
                      <ErrorMessage component={"span"} name="companyName" />
                    </div>

                    <div className="input">
                      <label htmlFor="country" className="label">
                        Country / Region <span>*</span>
                      </label>
                      <Field name="country" type="text" className="field" />
                      <ErrorMessage component={"span"} name="country" />
                    </div>
                    <div className="input">
                      <label htmlFor="street" className="label">
                        Street address <span>*</span>
                      </label>
                      <Field
                        name="street"
                        type="text"
                        placeholder="House Number and street name"
                        className="field"
                      />
                      <ErrorMessage component={"span"} name="street" />
                    </div>
                    <div className="input">
                      <Field
                        name="apartment"
                        type="text"
                        className="field"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                      />
                      <ErrorMessage component={"span"} name="apartment" />
                    </div>

                    <div className="input">
                      <label htmlFor="town" className="label">
                        Town / City <span>*</span>
                      </label>
                      <Field name="town" type="text" className="field" />
                      <ErrorMessage component={"span"} name="town" />
                    </div>

                    <div className="input">
                      <label htmlFor="state" className="label">
                        State / County <span>*</span>
                      </label>
                      <Field name="state" type="text" className="field" />
                      <ErrorMessage component={"span"} name="state" />
                    </div>

                    <div className="input">
                      <label htmlFor="zip" className="label">
                        ZIP Code <span>*</span>
                      </label>
                      <Field name="zip" type="text" className="field" />
                      <ErrorMessage component={"span"} name="zip" />
                    </div>
                    <div className="input">
                      <label htmlFor="phone" className="label">
                        Phone <span>*</span>
                      </label>
                      <Field name="phone" type="text" className="field" />
                      <ErrorMessage component={"span"} name="phone" />
                    </div>

                    <div className="input">
                      <label htmlFor="email" className="label">
                        Email Address <span>*</span>
                      </label>
                      <Field name="email" type="email" className="field" />
                      <ErrorMessage component={"span"} name="email" />
                    </div>

                    <div className="textareas">
                      <label htmlFor="notes" className="label">
                        Order notes (optional)
                      </label>
                      <textarea
                        name="notes"
                        id=""
                        cols="30"
                        rows="10"
                        className="textarea"
                      ></textarea>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
            <div className="order">
              <h2>Your order</h2>
              <div className="productOrder">
                <div className="subTotal">
                  <table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {basket.map((x) => (
                        <tr key={x._id}>
                          <td>
                            <h4 className="name">{x.title}</h4>
                            <span> × {x.count}</span>
                          </td>
                          <td>
                            <p>${x.price}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Subtotal</th>
                        <th>
                          <h4>${getTotal()}</h4>
                        </th>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <th>
                          <h4>${getTotal()}</h4>
                        </th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <Link to={"/account"}>
                <button type="submit">PLACE ORDER</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navigate to={"/login"}></Navigate>
        </>
      )}
      <Scroll />
    </>
  );
}

export default Checkout;

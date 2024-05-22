import React from "react";
import "./style.scss";

import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function ResetPassword() {
  const navigate = useNavigate();
  return (
    <>

      <div className="resetPasswordPage">
        <div className="resetPassword">
          <div className="resetContent">
            <Formik
              initialValues={{ email: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                navigate("/login");
              }}
            >
              <Form className="form">
                <p>
                  Lost your password? Please enter your username or email
                  address. You will receive a link to create a new password via
                  email.
                </p>
                <div className="input">
                  <label htmlFor="email" className="label">
                    Email address
                  </label>
                  <Field
                    name="email"
                    type="email"
                    id="email"
                    className="field"
                  />
                  <ErrorMessage name="email" component={"span"} />
                </div>

                <button type="submit">Reset Password</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>


    </>
  );
}

export default ResetPassword;

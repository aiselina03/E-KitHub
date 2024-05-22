import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./style.scss";
import { Link, NavLink } from "react-router-dom";

function BookPanel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    fetch("/api/books")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  function handleAdd(val) {
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(val),
    })
      .then((res) => res.json())
      .then((data) => {
        getAll();
      });
  }

  async function deleteById(id) {
    await fetch(`/api/books/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await getAll();
  }
  return (
    <>
      <div className="adminPanels">
        <div className="panels">
          <h3>
            <NavLink to={"/bookPanel"}>Book</NavLink>
          </h3>
          <h3>
            <NavLink to={"/userPanel"}>User</NavLink>
          </h3>
        </div>
      </div>
      <div className="addPage">
        <div className="forms">
          <Formik
            initialValues={{
              title: "",
              image: "",
              author: "",
              published_year: "",
              genre: "",
              price: "",
              summary: "",
            }}
            validationSchema={Yup.object({
              title: Yup.string().required("Please enter name"),
              image: Yup.string().required("Please enter image "),
              author: Yup.string().required("Please enter author "),
              published_year: Yup.number().required("Please enter year "),
              genre: Yup.string().required("Please enter genre "),
              summary: Yup.string().required("Please enter summary "),
              price: Yup.number().required("Please enter price"),
            })}
            onSubmit={(val, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                handleAdd(val);
                setSubmitting(false);
                resetForm();
              }, 400);
            }}
          >
            <Form className="form">
              <label htmlFor="title"></label>
              <Field
                name="title"
                type="text"
                className="field"
                placeholder="name"
              />
              <ErrorMessage name="title" />

              <label htmlFor="image"></label>
              <Field
                name="image"
                type="text"
                className="field"
                placeholder="image"
              />
              <ErrorMessage name="image" />

              <label htmlFor="author"></label>
              <Field
                name="author"
                type="text"
                className="field"
                placeholder="author"
              />
              <ErrorMessage name="author" />

              <label htmlFor="published_year"></label>
              <Field
                name="published_year"
                type="text"
                className="field"
                placeholder="year"
              />
              <ErrorMessage name="published_year" />

              <label htmlFor="genre"></label>
              <Field
                name="genre"
                type="text"
                className="field"
                placeholder="genre"
              />
              <ErrorMessage name="genre" />

              <label htmlFor="summary"></label>
              <Field
                name="summary"
                type="text"
                className="field"
                placeholder="summary"
              />
              <ErrorMessage name="summary" />

              <label htmlFor="price"></label>
              <Field
                name="price"
                type="text"
                className="field"
                placeholder="price"
              />
              <ErrorMessage name="price" />

              <button type="submit">Add Book</button>
            </Form>
          </Formik>
        </div>

        <div className="adminPanel">
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Summary</th>
                  <th>Year</th>
                  <th>Author</th>
                  <th>Genre</th>
                  <th>Price</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {products.map((x) => (
                  <tr key={x._id}>
                    <td>
                      <a href={x.pdf_url}>
                        <img src={x.image} alt="" />
                      </a>
                    </td>
                    <td>{x.title}</td>
                    <td>{x.summary}</td>
                    <td>{x.published_year}</td>
                    <td>{x.author}</td>
                    <td>{x.genre}</td>
                    <td>${x.price}</td>
                    <td>
                      <Link to={`/bookEditPanel/${x._id}`}>
                        <button>Update</button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => deleteById(x._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookPanel;

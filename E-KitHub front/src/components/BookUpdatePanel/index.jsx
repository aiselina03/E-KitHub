import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import Scroll from "../Scroll";
import "./style.scss";

function BookEditPanel() {
  let { id } = useParams();
  const { token, decode } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [published_year, setPublished_year] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (!decode) {
      window.location.href = "/";
    } else {
      getUserById(id);
    }
  }, [decode, id]);

  async function getUserById(id) {
    try {
      const response = await fetch(`/api/books/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const userData = await response.json();
      setTitle(userData.title);
      setPrice(userData.price);
      setGenre(userData.genre);
      setImage(userData.image);
      setSummary(userData.summary);
      setPublished_year(userData.published_year);
      setAuthor(userData.author);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (decode && decode.role === "admin") {
      try {
        const response = await fetch(`http://localhost:3000/api/books/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            price,
            genre,
            image,
            summary,
            published_year,
            author,
          }),
        });
        if (response.ok) {
          window.location.href = "/bookPanel";
        }
        console.log("Product updated successfully");
      } catch (error) {
        console.error("Error occurred while updating user:", error);
      }
    }
  }
  return (
    <>
      <div className="menuUpdatePanel">
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            placeholder="Image"
          />

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Name"
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />

          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author"
          />

          <input
            type="text"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Summary"
          />
          <input
            type="text"
            value={published_year}
            onChange={(e) => setPublished_year(e.target.value)}
            placeholder="Year"
          />

          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="Genre"
          />
          <br />
          <button type="submit">Update Book</button>
        </form>
      </div>
      <Scroll />
    </>
  );
}

export default BookEditPanel;

import React, { useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";

function SearchResult() {
  const { searchQuery, search } = useContext(SearchContext);
  const { filteredBook } = search();

  return (
    <section id="search">
      <h2>Search Results for "{searchQuery}"</h2>
      {filteredBook.length === 0 ? (
        <p>No books found</p>
      ) : (
        <ul>
          {filteredBook.map((book) => (
            <li key={book._id}>
              <Link to={"/bookDetail/" + book._id}>{`${book.title}`}</Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default SearchResult;

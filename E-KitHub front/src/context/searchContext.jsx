import React, { createContext,  useEffect, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const search = () => {
    const filteredBook = books.filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { filteredBook };
  };

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, search }}>
      {children}
    </SearchContext.Provider>
  );
};

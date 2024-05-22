import React, { useContext, useState } from "react";
import "./style.scss";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";
import SearchResult from "../../components/SearchResult";
import { UserContext } from "../../context/userContext";

function Navbar() {
  const [showSearchResult, setShowSearchResult] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { logOut, decode } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    setShowSearchResult(!showSearchResult);
  };

  function toggleSearch() {
    setOpenSearch(!openSearch);
  }

  const handleIconClick = () => {
    if (decode) {
      handleSearch();
    } else {
      navigate("/login");
    }
  };
  return (
    <>
      <div className="navbarContainer">
        <div className="navbar">
          <div className="logo">
            <Link to={"/"}>
              <img src="/src/components/logo/E-KitHubT.png" alt="" />
            </Link>
          </div>
          <div className="menu">
            <ul>
              <li>
                <NavLink to={"/"}>HOME</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>ABOUT</NavLink>
              </li>
              <li>
                <NavLink to={"/books"}>BOOKS</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>CONTACT</NavLink>
              </li>
              {decode && decode.role === "admin" ? (
                <li>
                  <NavLink to={"/adminPanel"}>ADMIN PANEL</NavLink>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="icons">
            <i
              className="fa-sharp fa-light fa-magnifying-glass"
              onClick={toggleSearch}
            ></i>

            {decode ? (
              <>
                <div className="user">
                  <NavLink to={"/login"}>
                    <i className="fa-solid fa-user"></i>
                  </NavLink>
                  <div className="logOut" onClick={logOut}>
                    <i className="fa-regular fa-right-from-bracket"></i>
                    <p>Log Out</p>
                  </div>
                </div>
              </>
            ) : (
              <NavLink to={"/login"}>
                <i className="fa-light fa-user"></i>
              </NavLink>
            )}
            <Link to={"/basket"}>
              <i className="fa-light fa-cart-shopping"></i>
            </Link>

            <Link to={"/wishlist"}>
              <i className="fa-light fa-heart"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className={`searchPanel  ${openSearch ? "searchToggle" : ""}`}>
        <i className="fa-sharp fa-light fa-xmark" onClick={toggleSearch}></i>
        <div className="search">
          <input
            type="text"
            placeholder="Enter Search Keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <i
            className="fa-sharp fa-light fa-magnifying-glass"
            onClick={handleIconClick}
          ></i>
        </div>
        {showSearchResult && <SearchResult />}
      </div>
    </>
  );
}

export default Navbar;

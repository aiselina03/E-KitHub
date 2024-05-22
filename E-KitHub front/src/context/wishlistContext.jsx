import React, { createContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const WishlistContext = createContext();
function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);

  function addRemoveWishlist(item) {
    const itemIndex = wishlist.findIndex((x) => x._id === item._id);
    if (itemIndex === -1) {
      setWishlist([...wishlist, { ...item }]);
    } else {
      setWishlist(wishlist.filter((x) => x._id !== item._id));
    }
  }

  function checkIsWishlist(item) {
    const itemIndex = wishlist.findIndex((x) => x._id === item._id);
    if (itemIndex!== -1) {
     return true
    } else {
    return false
    }
  }

  const data = {wishlist,
    addRemoveWishlist,checkIsWishlist
  };
  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
}

export default WishlistProvider;

import React from "react";
import UserProvider from "./userContext";
import { SearchProvider } from "./searchContext";
import BasketProvider from "./basketContext";
import WishlistProvider from "./wishlistContext";

function MainProvider({ children }) {
  return (
    <UserProvider>
      <BasketProvider>
        <WishlistProvider>
          <SearchProvider>{children}</SearchProvider>
        </WishlistProvider>
      </BasketProvider>
    </UserProvider>
  );
}

export default MainProvider;

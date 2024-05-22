import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import BooksPage from "./pages/Books";

import Contact from "./pages/Contact";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import BookDetail from "./pages/BookDetail";
import Account from "./pages/Account";
import Basket from "./pages/Basket";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import PrivateRoute from "./routes/PrivateRoute";
import AdminPanel from "./pages/AdminPanel";
import BookPanel from "./components/BookPanel";
import UserPanel from "./components/UserPanel";
import UserEditPanel from "./components/UserUpdatePanel";
import BookEditPanel from "./components/BookUpdatePanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bookDetail/:id" element={<BookDetail />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/resetPassword" element={<ResetPassword />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/account" element={<Account />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route element={<PrivateRoute roles={["admin"]} />}>
              <Route path="/adminPanel" element={<AdminPanel />} />
              <Route path="/bookPanel" element={<BookPanel />} />
              <Route path="/userPanel" element={<UserPanel />} />
              <Route path="/userEditPanel/:id" element={<UserEditPanel />} />
              <Route path="/bookEditPanel/:id" element={<BookEditPanel />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

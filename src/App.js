import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PostersListing from "./pages/PostersListing/PostersListing";
import Poster from "./pages/Poster/Poster";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posters-listing" element={<PostersListing />} />
        <Route path="/poster/:id" element={<Poster />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import PostersListing from "./pages/PostersListing/PostersListing";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posters-listing" element={<PostersListing />} />
        <Route path="/poster/:id" />
        <Route path="/signup" />
        <Route path="/login" />
        <Route path="/profile" />
        <Route path="/wishlist" />
        <Route path="/cart" />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/posters-listing" />
        <Route path="/poster/:id" />
        <Route path="/signup" />
        <Route path="/login" />
        <Route path="/profile" />
        <Route path="/wishlist" />
        <Route path="/cart" />
      </Routes>
    </div>
  );
}

export default App;

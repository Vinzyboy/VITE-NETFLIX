import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/frontend/Home";
import Movie from "./components/pages/backend/movies/Movie";


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/admin/movie" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

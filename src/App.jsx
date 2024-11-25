import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/pages/backend/movies/Movie";
import Settings from "./components/pages/backend/settings/Settings";
import { StoreProvider } from "./components/store/storeContext";
import Homepage from "./components/pages/frontend/homepage/Homepage";

const App = () => {
  return (
    <StoreProvider>
      <div>
        <Router>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/admin/movie" element={<Movie />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Routes>
        </Router>
      </div>
    </StoreProvider>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import FileUpload from "./components/FileUpload";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register"; // Import the Register component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/upload"
            element={<PrivateRoute element={<FileUpload />} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

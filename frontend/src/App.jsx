import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Card from "./components/card/Card";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <div className="app">
                  <div className="main-content">
                    <Navbar />
                    <Card />
                  </div>
                  <Footer />
                </div>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

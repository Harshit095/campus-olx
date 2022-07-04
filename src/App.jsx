import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./index.css";

import Productdetail from "./Components/productdetail";
import "./App.css";
import Front from "./Components/frontpage";
import SellPage from "./Components/sellPage";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Footer />
        {/* <Login /> */}
        {/* <h1 style={{ textAlign: "center" }}>CAMPUS OLX</h1> */}
        {/* <SellPage/> */}
      </div>
    </>
  );
};

export default App;

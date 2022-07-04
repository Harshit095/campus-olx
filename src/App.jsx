import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import "./index.css";
const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Footer />
        {/* <Login /> */}
      </div>
    </>
  );
};

export default App;

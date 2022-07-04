import "./navbar.css";
import logo from "../../assets/logoBlack.png";
import profileImage from "../../assets/profile.png";
import AddIcon from "@mui/icons-material/Add";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-width">
          <div className="navbar-left">
            <img className="navbar-logo" src={logo} alt="CAMPUS-OLX-LOGO" />
          </div>
          <div className="navbar-center">
            <div className="searchContainer">
              <div className="inputContainer">
                <input
                  type="text"
                  className="searchBar"
                  placeholder="Find cars, mobile phones and more..."
                />
              </div>
              <div className="searchIconContainer">
                <SearchSharpIcon fontSize="large" className="searchIcon" />
              </div>
            </div>
          </div>
          <div className="navbar-right">
            <div className="sellProdContainer">
              <button className="sellProduct">
                <AddIcon fontSize="medium" className="sellProductIcon" />
                SELL
              </button>
            </div>
            <img src={profileImage} alt="Profile" className="profileImage" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="categories-wrapper">
          <div className="scroller">
            <button className="filter-btn" type="button">
              ALL
            </button>
            <button className="filter-btn" type="button">
              ELECTRONICS
            </button>
            <button className="filter-btn" type="button">
              BICYCLE
            </button>
            <button className="filter-btn" type="button">
              SPORTS
            </button>
            <button className="filter-btn" type="button">
              BOOKS
            </button>
            <button className="filter-btn" type="button">
              BOUTIQUE
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
            <button className="filter-btn" type="button">
              OTHER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

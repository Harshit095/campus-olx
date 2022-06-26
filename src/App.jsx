import Productdetail from './Components/productdetail';
import React from 'react';
import './App.css';
import Front from './Components/frontpage';
import SellPage from './Components/sellPage'

const App = () => {
  return (
    <>
      <div className="app">
        {/* <h1 style={{ textAlign: "center" }}>CAMPUS OLX</h1> */}
        <SellPage/>
      </div>


    </>
  );
};

export default App;

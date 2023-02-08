import React from "react";
import DisneyAPI from "./components/DisneyAPI";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <DisneyAPI />
        </div>
      </div>
    </>
  );
};

export default App;

import React, { Component } from "react";
import Navbar from "./components/navbar.jsx";
import Category from "./components/category.jsx";
import Main from "./components/main.jsx";


class App extends Component {
  state = {  } 
  render() { 
    return ( 
      <div className="Gird-Container">

            <Navbar/>
            <Main/>
            <Category/>
      
      </div>
      

    );
  }
}
 
export default App;



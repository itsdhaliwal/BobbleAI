import React, { Component } from "react";
import { HashRouter as Router} from "react-router-dom";
import Navbar from "./navbar";
import SignUp from "./SignUp";


class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <Navbar />
          <SignUp />
        </div>
      </Router>
    )
  }
}

export default App;

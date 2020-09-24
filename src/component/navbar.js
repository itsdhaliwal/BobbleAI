import React, { Component } from "react";
import './navbar.scss';
import logo from "./logo.png"


class Navbar extends Component{
    render(){
        return(
            <div class="topnav">
                <div class="pic">
                <img src={logo} style={{width: "300px", height: "200px" }}></img>
                </div>
            </div>
        )
    }
}
export default Navbar;
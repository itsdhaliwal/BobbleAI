import React, { Component } from "react";
import './SignUp.scss';
import {Link} from "react-router-dom";
import axios from "axios";
import FacebookLogin from "react-facebook-login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

class SignUp extends Component {
    state = {
        login: false,
        data: {},
      };
      responseFacebook = (response) => {
        console.log(response);
        let data = { response: response };
        if (response.accessToken) {
          console.setState({ login: false });
        } else {
          alert("facebook login error");
          data["login"] = false;
          this.setState({ login: false });
        }
      };
      validate = (fname, lname, email, password) => {
        if (fname == "" || lname == "" || email == "" || password == "") {
          alert("All inputs are compulsory");
          return false;
        }
        if (
          !/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(
            email
          )
        ) {
          alert("You have entered an invalid email address!");
          return false;
        }
    
        return true;
      };
      signUp = () => {
        let fname = document.getElementById("inputFirstName").value;
        let lname = document.getElementById("inputLastName").value;
        let email = document.getElementById("inputEmail").value;
        let password = document.getElementById("inputPassword").value;
        if (this.validate(fname, lname, email, password)) {
          axios
            .post("https://reqres.in/api/users", { fname: fname, lname: lname })
            .then((res) => {
              this.setState({ login: true, res: res });
              console.log(res);
            })
            .catch((error) => {
              alert("Error while Signing up");
              throw error;
            });
        }
      };
    render() {
        if (this.state.login) {
            alert("Logged In");
          }
        return(
            <div>
                <div class="signUpForm">
                    <h5><b>Sign Up</b></h5>
                    <h1>Create your Account</h1>
                    <h6>Lorem ipsum dolor sit amet,consectetur adipiscing eit</h6>
                    <button style={{height:"60px"}}>Sign Up with Google</button><FacebookLogin
                appId="342743237001732"
                autoLoad={true}
                fields="name,email,picture"
                scope="public_profile,user_friends"
                callback={this.responseFacebook}
                icon="fa-facebook"
              />
                    <h4>or</h4>
                    <form>
                        <input
                        id="inputFirstName"
                         type="text" 
                         class="inputBox" 
                         placeholder="First Name"
                         required>
                        </input><br></br>
                        
                        <input 
                        id="inputLastName"
                        type="text" 
                        class="inputBox" 
                        placeholder="Last Name"
                        required>
                        </input><br></br>
                        <input 
                        id="inputEmail"
                        type="email" 
                        class="inputBox" 
                        placeholder="Email Address">
                        </input><br></br>
                        <input 
                        id="inputPassword"
                        type="password" 
                        class="inputBox" 
                        placeholder="Password">
                        </input><br></br>
                        <p>By clicking the Sign Up, you agree to our <Link>Terms of Use</Link> and our <Link>Privacy policy</Link>.</p><br></br>
                        <button 
                        type="submit" 
                        onClick={()=>{this.signUp()}}
                        class="btn btn-primary"
                        style={{width:"80%"}}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>

            </div>
        )
    }
}
export default SignUp;
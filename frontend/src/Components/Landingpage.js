import React, { Component } from "react";

import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";
//import { Redirect } from 'react-router-dom'

class Landingpage extends Component {


    state = {
        redirect: null
      }
      setRedirect = () => {
        this.setState({
          redirect: "/contact"
        })
      }
      

  render() {
    // const responseFacebook = (response) => {
    //   console.log(response);
    // };

  //  const RenderRedirect = () => {

  //   console.log("In Success")
  //    console.log(this.state)
  //    return <Redirect to="/contact" />

        
  //     }

    const responseGoogle = (response) => {
      console.log("In fail")

      console.log(response);
    };

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

        <FacebookLogin
          appId="270009391205372" //APP ID NOT CREATED YET
          autoLoad={false}

          fields="name,email,picture"
          callback={()=> this.props.history.push('/contact')}
        />
        <br />
        <br />

        <GoogleLogin
          clientId="15828300144-14mtu29gd3kepgmtip2b1b03mtul94kp.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={()=> this.props.history.push('/contact')}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default Landingpage;

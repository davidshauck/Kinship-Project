import decode from "jwt-decode";
import axios from "axios";

export default class AuthService {
  login = (email, password) => {
    console.log("LOGIN INFO: ", email, password)
    // Get a token
    return axios
      .post("/api/listings/login", {
        email: email,
        password: password
      })
      .then(res => {
        // set the token once the user logs in
        this.setToken(res.data.token);
        // return the rest of the response
        return res;
      });
  };

  // Get profile is called first
  getProfile = () => {
    const token = this.getToken();
    if(token != null ){
      console.log("The user prrovided a token")
      return decode(token);
    }else{
      return false
    }
  };

  loggedIn() {
    // Checks if there is a saved token and it's still valid
    // const token = this.getToken();
    // if(token){
    //   return !this.isTokenExpired(token);
    // }else {
    //   return false;
    // }
     // handwaiving here

     return true 
  }

  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      console.log("DECODED1", decoded)
      if (decoded.exp < Date.now() / 1000 ) {
        return true;
      } else return false;
    } catch (err) {
      return err
    }
  }

  // setToken(idToken) {
  //   // Saves user token to localStorage
  //   axios.defaults.headers.common["Authorization"] = `Bearer ${idToken}`;
  //   localStorage.setItem("id_token", idToken);
  // }

  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }

  logout() {
    // Clear user token and profile data from localStorage
    axios.defaults.headers.common["Authorization"] = null;
    localStorage.removeItem("id_token");
    // this will reload the page and reset the state of the application
    window.location.reload("/");
  }
}

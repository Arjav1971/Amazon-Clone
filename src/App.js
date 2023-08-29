// import logo from './logo.svg';
import React,{ Fragment,useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from "./Checkout";
import Login from './Login';
import {BrowserRouter as Router, Switch,Route,Routes} from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from './StateProvider';




function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    // will run once when the app component loads...
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>',authUser);
      if(authUser){
        // the user just logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }
      else{
        // the user just logged out
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
    })

  },[])

  return (
    
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<><Header/><Login/></>}/>

           
          <Route path="/Checkout" element={<><Header/><Checkout/></>}/>
    
          <Route path="/" element={<><Header/><Home/></>} />
        </Routes>
      </div>

    </Router>
    

  );
}

export default App;

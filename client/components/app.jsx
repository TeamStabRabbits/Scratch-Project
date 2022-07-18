import React, { useEffect, useState } from "react";
//import './stylesheets/styling.scss';
import LoginNavbar from "./LoginNavbar.jsx";
import Login from "./Login.jsx";
// import Navbar from './Navbar.jsx';
// import {Box, Input, Button} from '@mui/material';
import EventsPage from "./EventsPage.jsx";
import { useNavigate, Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";

// Render App
// Queue App useEffect
// Render EventsPage
// Queue EventsPage useEffect w/ initial state { username: '', location: '' }
// App useEffect runs -> state is now { username: 'yoojin', location: 'NYC' }
// EventsPage useEffect runs -> { username: '', location: '' }

// Render App
// use effect in app fires
// asynchronous state setters did not set state before navigating to event page
// event page now has initial state which is empty for username and location


function App(props) {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);
  // const [pageRoute, setPageRoute] = useState();

  const [userData, setUserData] = useState({
    username: "",
    location: "",
  });

  const [eventData, setEventData] = useState({
    searchEventName: "",
    searchEventLocation: "",
    eventCardsContainer: [],
  });

  let navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('auth');
    console.log('use effect in app.jsx')
    // if token exists, redirect user to login endpoint
    if (!token) {
      console.log("go login");
      navigate("/login", { replace: true });
    } else {
    const newUserData = jwtDecode(token); 
    // console.log('newUserData in useEffect:', newUserData);
    setUserData({...userData, ...newUserData});
    setIsLoggedIn(true);
      console.log("you are logged in");
      navigate("/", { replace: true });
    }

    setAppIsReady(true);
  }, []);
  console.log('newUserData in app render:', userData);

  const handleLogin = (userData) => {
    setUserData(userData);
    setIsLoggedIn(true);
    navigate("/", { replace: true });
  };

  if (appIsReady) {
    console.log("Rendering app now");
    return (
      <Routes>
        <Route
          path="/"
          element={
            <EventsPage
              userData={userData}
              setUserData={setUserData}
              isNewUser={isNewUser}
              setIsNewUser={setIsNewUser}
              eventData={eventData}
              setEventData={setEventData}
            />
          }
          
        />
        <Route
          path="/login"
          element={
            <Login
              userData={userData}
              setUserData={setUserData}
              isNewUser={isNewUser}
              setIsNewUser={setIsNewUser}
              eventData={eventData}
              setEventData={setEventData}
              onLogin={handleLogin}
            />
          }
        />
      </Routes>
    );
  }
  else {
    console.log("Not rendering pages yet");
    return <div>Nothing yet</div>;
  }
}

{
  /* {//<Navbar></Navbar>
            }{<LoginNavbar 
                userData={userData} 
                setUserData={setUserData} 
                isNewUser={isNewUser} 
                setIsNewUser={setIsNewUser}
                eventData={eventData}
                setEventData={setEventData}
                />
          }{console.log(userData, isNewUser)} */
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    // console.log(decodedCookie);
    let ca = decodedCookie.split(';');
    // console.log(ca);
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

export default App;

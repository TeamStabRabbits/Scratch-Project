import React, { useEffect, useState } from "react";
//import './stylesheets/styling.scss';
import LoginNavbar from "./LoginNavbar.jsx";
import Login from "./Login.jsx";
// import Navbar from './Navbar.jsx';
// import {Box, Input, Button} from '@mui/material';
import EventsPage from "./EventsPage.jsx";
import { useNavigate, Routes, Route } from "react-router-dom";

function App(props) {
  const [isNewUser, setIsNewUser] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [pageRoute, setPageRoute] = useState();

  const [userData, setUserData] = useState({
    username: "yoojpooj",
    password: "password123",
    location: "new york",
  });

  const [eventData, setEventData] = useState({
    searchEventName: "",
    searchEventLocation: "",
    eventCardsContainer: [],
  });

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      console.log("go login");
      navigate("/login", { replace: true });
    } else {
      console.log("you are logged in");
      navigate("/", { replace: true });
    }
  }, []);

  const handleLogin = () => {
    navigate("/", { replace: true });
  };

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
            onLogin={handleLogin}
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

export default App;

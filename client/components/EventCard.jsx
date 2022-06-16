import React, {useEffect, useState, useContext} from 'react';
import {Box, Input, Button} from '@mui/material';



function EventCard (props) {

  return (
    <div>
      {/* <p>Event name: {props.eventName}</p> */}
      {/* <p>Location: {props.location}</p> */}
      <p>{JSON.stringify(props.eventCardData)}</p>
      <h1>{props.eventCardData.event_name}</h1>
      <p>{props.eventCardData.location}</p>
      <Button value="Enter Chatroom" /* onClick */>Enter Chatroom</Button>
    </div>
  )



}

export default EventCard;
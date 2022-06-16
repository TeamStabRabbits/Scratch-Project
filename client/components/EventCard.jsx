import React, {useEffect, useState, useContext} from 'react';
import {Box, Input, Button} from '@mui/material';



function EventCard ({ key, eventCardData }) {
  // event name, date, location, description
  console.log('event card data: ', eventCardData)
  
  return (
    <div>
      <Box className='event-card' >
        <h1>Event name: {eventCardData.event_name}</h1>
        {/* <h2>Date: {eventCardData.date.getDate() + "-" + parseInt(eventCardData.date.getMonth()+1) + "-"+eventCardData.date.getFullYear()}</h2> */}
        <h2>Location: {eventCardData.location}</h2>
        <h2>Date: {}</h2>
        <p>Description: {eventCardData.description}</p>

      {/* <p>{(props.eventCardData)}</p> */}

        <Button value="Enter Chatroom" /* onClick */>Enter Chatroom</Button>
      </Box>      
    </div>
  )
  // let today = new Date();

  // let date=today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();
  
  // console.log(date)
  
  // new Date(<your-date-object>.toDateString());

}

export default EventCard;
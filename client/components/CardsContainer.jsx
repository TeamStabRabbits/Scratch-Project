import React, { useEffect, useState, useContext } from "react";
import { Box, Input, Button } from "@mui/material";
import EventCard from "./EventCard.jsx";

//props database dependent
function CardsContainer({ eventCardContainer }) {
  // const eventCards = props.eventData.eventCardsContainer.map(
  console.log(eventCardContainer);
  const eventCards = eventCardContainer.map((eventCardData, i) => {
    console.log(eventCardData);
    return <EventCard key={i} eventCardData={eventCardData} />;
  });

  return (
    <div className="eventCardContainer">
      {/* from card container */}
      {eventCards}
    </div>
  );
}

export default CardsContainer;

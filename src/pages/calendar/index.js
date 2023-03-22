import React from "react";
import CalendarComponent from "./calendar";

const Calendar = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        left: "500px",
        width: "auto",
        height: "auto",
      }}
    >
      <CalendarComponent />
    </div>
  );
};

export default Calendar;

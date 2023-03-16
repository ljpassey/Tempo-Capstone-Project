import React, { useState } from "react";

import { Calendar } from "primereact/calendar";
import "primereact/resources/themes/md-light-indigo/theme.css";

const CalendarComponent = () => {
  const [dates, setDates] = useState(null);

  return (
    <div
      className="card flex justify-content-center"
      style={{ width: "50%", margin: "0 auto", position: "relative" }}
    >
      <Calendar
        value={dates}
        onChange={(e) => setDates(e.value)}
        selectionMode="range"
        showIcon
        style={{ width: "100%", position: "fixed", left: "500px" }}
      />
    </div>
  );
};

export default CalendarComponent;

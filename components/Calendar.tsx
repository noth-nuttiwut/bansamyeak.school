"use client"
import React, { useState } from "react";
import Calendar from "react-calendar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MiniCalendar = () => {
   const [value, onChange] = useState(new Date());

  return (
    <div className="card  sm: w-9/12 md:w-full">
      <Calendar
          defaultValue={value}
          value={value}
          prevLabel={<MdChevronLeft className="ml-1 h-6 w-6 " />}
          nextLabel={<MdChevronRight className="ml-1 h-6 w-6 " />}
          view={"month"}
          className={"p-4"}

        />
    </div>
  );
};

export default MiniCalendar;
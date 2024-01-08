import React, { useEffect, useState } from "react";
import moment from "moment";
import { IoCalendarClearOutline } from "react-icons/io5";

const DateCard = () => {
  const [currentDate, SetCurrentDate] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      SetCurrentDate(moment());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-white border w-40 md:w-56 text-xs md:text-lg border-[#E2E8F0] rounded-lg font-medium text-gray-900 py-1 md:px-2 px-3 justify-center flex items-center shadow-sm object-center">
      <IoCalendarClearOutline />
      <span className="ml-2">{currentDate.format("D MMMM YYYY")}</span>
    </div>
  );
};

export default DateCard;

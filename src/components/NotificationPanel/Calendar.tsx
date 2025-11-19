import {
  formatCalendarDate,
  calendarData as generateCalendarData,
  getMonthName,
} from "@/utils/date";
import { useState } from "react";

function Calendar() {
  const [dateToShow, setDateToShow] = useState({
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });
  const today = new Date();
  const { dayIndex, currentMonthLength, previousMonthLength } =
    generateCalendarData(
      new Date(Object.values(dateToShow).reverse().join("/"))
    );

  function handleMonthChange(operation: "plus" | "minus") {
    if (operation === "plus")
      setDateToShow((prevDate) => {
        if (prevDate.month === 12) {
          return { ...prevDate, month: 1, year: prevDate.year + 1 };
        }
        return { ...prevDate, month: prevDate.month + 1 };
      });
    else
      setDateToShow((prevDate) => {
        if (prevDate.month === 1) {
          return { ...prevDate, month: 12, year: prevDate.year - 1 };
        }
        return { ...prevDate, month: prevDate.month - 1 };
      });
  }

  return (
    <div
      className={`bg-stone-700/90 rounded-md z-[9999] font-extralight w-80 overflow-hidden text-xs`}
    >
      <h1 className='bg-stone-800 p-3'>{formatCalendarDate()}</h1>
      <div className='p-3'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold tracking-wider'>
            {getMonthName(dateToShow.month)}, {dateToShow.year}{" "}
          </h1>
          <div className='flex gap-3'>
            <img
              onClick={() => handleMonthChange("plus")}
              src='https://img.icons8.com/?size=100&id=ZOUx9tGqWHny&format=png&color=ffffff'
              className={`size-4 cursor-pointer duration-300`}
            />
            <img
              onClick={() => handleMonthChange("minus")}
              src='https://img.icons8.com/?size=100&id=ZOUx9tGqWHny&format=png&color=ffffff'
              className={`size-4 cursor-pointer duration-300 rotate-180`}
            />
          </div>
        </div>
        <div className='grid grid-cols-7 gap-3 mt-5'>
          <p className='p-1 py-2 text-center'>Mo</p>
          <p className='p-1 py-2 text-center'>Tu</p>
          <p className='p-1 py-2 text-center'>We</p>
          <p className='p-1 py-2 text-center'>Th</p>
          <p className='p-1 py-2 text-center'>Fr</p>
          <p className='p-1 py-2 text-center'>Sa</p>
          <p className='p-1 py-2 text-center'>Su</p>

          {Array.from({ length: currentMonthLength + dayIndex }).map(
            (_, index) => (
              <p
                key={index}
                className={`p-2 border border-transparent rounded-full ${
                  dateToShow.month === today.getMonth() + 1 &&
                  dateToShow.year === today.getFullYear() &&
                  today.getDate() === index + 2 - dayIndex
                    ? "bg-stone-800 border-blue-500"
                    : " hover:border-white"
                } text-center ${index < dayIndex - 1 ? "text-gray-500" : ""}`}
              >
                {index < dayIndex - 1
                  ? previousMonthLength + index - dayIndex + 2
                  : index + 2 - dayIndex > currentMonthLength
                  ? ""
                  : index + 2 - dayIndex}
              </p>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Calendar;

//calendar data

//write a function that has these
//input => you give the function new Date object;

//output => object containing

//dayIndex => index of the first day of the week
//currentMonthLength
//previousMonthLength => was the last month 30/31/28?

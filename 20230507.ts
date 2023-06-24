/* 
Create a react component where a dob is entereed and the following happens: 
- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
*/

import { useState } from "react";

const DEFAULTRESULT = {
  yearsPast: "--",
  monthsPast: "--",
  daysPast: "--",
};

function App() {
  const [error, setError] = useState({
    errorDay: false,
    errorMonth: false,
    errorYear: false,
  });
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(DEFAULTRESULT);

  const currentDate = new Date();
  let currentYear = currentDate.getFullYear();

  function getAge(_year, _month, _day) {
    const today = new Date();
    const birthDate = new Date(_year, _month, _day);
    const yearsLater = new Date(
      birthDate.getFullYear() +
        1 +
        "/" +
        (birthDate.getMonth() + 1) +
        "/" +
        birthDate.getDate()
    );
    const monthsLater = new Date(
      birthDate.getFullYear() +
        "/" +
        (birthDate.getMonth() + 2) +
        "/" +
        birthDate.getDate()
    );
    const daysLater = new Date(
      birthDate.getFullYear() +
        "/" +
        (birthDate.getMonth() + 1) +
        "/" +
        (birthDate.getDate() + 1)
    );

    const years = Math.floor((today - birthDate) / (yearsLater - birthDate));
    const dateMonths = (today - birthDate) % (yearsLater - birthDate);
    const months = Math.floor(dateMonths / (monthsLater - birthDate));
    const dateDays = dateMonths % (monthsLater - birthDate);
    const days = Math.floor(dateDays / (daysLater - birthDate));
    return { yearsPast: years, monthsPast: months, daysPast: days };
  }

  function handleSubmit() {
    let errorFound = false;
    if (day > 31 || day < 1) {
      errorFound = true;
      setError((prevError) => ({ ...prevError, errorDay: true }));
    } else {
      setError((prevError) => ({ ...prevError, errorDay: false }));
    }
    if (month > 12 || month < 1) {
      errorFound = true;
      setError((prevError) => ({ ...prevError, errorMonth: true }));
    } else {
      setError((prevError) => ({ ...prevError, errorMonth: false }));
    }
    if (year > currentYear) {
      errorFound = true;
      setError((prevError) => ({ ...prevError, errorYear: true }));
    } else {
      setError((prevError) => ({ ...prevError, errorYear: false }));
    }
    if (errorFound) return setResult(DEFAULTRESULT);
    setResult(getAge(year, month - 1, day));
  }
  return (
    <main className="container max-w-full h-screen flex place-content-center bg-gray-300 ">
      <div className="flex place-content-center flex-wrap ">
        <div className="md:w-96 md:h-96 bg-white rounded-xl rounded-ee-[130px] p-6">
          <form className="flex gap-4">
            <div>
              <label
                htmlFor="day"
                className={`block text-xs font-bold leading-6 text-gray-500 uppercase ${
                  error.errorDay && "text-red-500"
                } `}
              >
                Day
              </label>

              <input
                type="number"
                name="day"
                id="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="block w-20 rounded-md py-1.5 text-gray-900 border-2 border-gray-400 font-bold"
              />
              {error.errorDay && (
                <div className="text-red-500 text-[9px] ">
                  Must be a valid day
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="month"
                className={`block text-xs font-bold leading-6 text-gray-500 uppercase ${
                  error.errorMonth && "text-red-500"
                } `}
              >
                Month
              </label>

              <input
                type="number"
                name="month"
                id="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="block w-20 rounded-md py-1.5 text-gray-900 border-2 border-gray-400 font-bold"
              />
              {error.errorDay && (
                <div className="text-red-500 text-[9px] ">
                  Must be a valid month
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor="year"
                className={`block text-xs font-bold leading-6 text-gray-500 uppercase ${
                  error.errorMonth && "text-red-500"
                } `}
              >
                year
              </label>

              <input
                type="number"
                name="year"
                id="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="block w-20 rounded-md py-1.5 text-gray-900 border-2 border-gray-400 font-bold"
              />
              {error.errorYear && (
                <div className="text-red-500 text-[9px] ">
                  Must be a past year
                </div>
              )}
            </div>
          </form>
          <div className="my-10 border-t-2 relative flex justify-center md:justify-end">
            <button
              onClick={handleSubmit}
              className="rounded-full bg-indigo-500 p-3 w-14 h-14 -top-6 absolute mx-auto "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="46"
                height="44"
                viewBox="0 0 46 44"
                className="w-8 h-8"
              >
                <g fill="none" stroke="#FFF" strokeWidth="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
                </g>
              </svg>
            </button>
          </div>
          <div className="text-5xl font-extrabold py-5">
            <div>
              <span className="text-indigo-500">{result.yearsPast}</span>years
            </div>
            <div>
              <span className="text-indigo-500">{result.monthsPast}</span>months
            </div>
            <div>
              <span className="text-indigo-500">{result.daysPast}</span>days
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;

// Create a tricking clock. There is a div with an id of "clock". Display the current hours, minutes and seconds

const clock = () => {
  const clockDiv = document.querySelector("#clock");
  if (!clockDiv) return;

  return setInterval(() => {
    const date = new Date();
    const tick = date.toLocaleTimeString();
    clockDiv.textContent = tick;
  }, 1000);
};

clock();

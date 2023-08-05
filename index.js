let submitBtn = document.querySelector(".submitbtn button");
submitBtn.addEventListener("click", () => {
  //RECEIVING FROM THE USER
  let dayFromUser = parseInt(document.getElementById("day").value);
  let monthFromUser = parseInt(document.getElementById("month").value);
  let yearFromUser = parseInt(document.getElementById("year").value);

  //EDGE CASES PENDING FOR USERS

  const date = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };

  let currentDate = String(date.toLocaleDateString("en-US", options));
  //CURRENT DATE RECEIVED FROM MACHINE
  let [curMonth, curDay, curYear] = currentDate.split("/");

  // if month has single digit
  if (curMonth.length == 1) {
    curMonth = "0" + curMonth;
  }

  // if day has single digit
  if (curDay.length == 1) {
    curDay = "0" + curDay;
  }

  let day,
    month,
    year = 0;

  year = parseInt(curYear) - yearFromUser;

  //CONDITIONS FOR MONTH
  if (monthFromUser > parseInt(curMonth)) {
    year--;
    month = parseInt(curMonth) - monthFromUser + 12;
  } else {
    month = parseInt(curMonth) - monthFromUser;
  }

  let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  //CONDITIONS FOR DAYS
  if (dayFromUser > parseInt(curDay)) {
    day = parseInt(curDay) - dayFromUser + monthDay[month];
    month--;
  } else {
    day = parseInt(curDay) - monthFromUser;
  }

  console.log(day, month, year);

let years = document.getElementById('years');
let months = document.getElementById('months');
let days = document.getElementById('days');

years.innerHTML = year;
months.innerHTML= month;
days.innerHTML = day;

});

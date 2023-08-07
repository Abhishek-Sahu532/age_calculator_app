let submitBtn = document.querySelector(".submitbtn button");
submitBtn.addEventListener("click", () => {
  //RECEIVING FROM THE USER
  //MONTH DAYS FROM JAN TO DEC
  let monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


  let dayFromUser = parseInt(document.getElementById("day").value);
  let monthFromUser = parseInt(document.getElementById("month").value);
  let yearFromUser = parseInt(document.getElementById("year").value);

  // console.log(dayFromUser)
  let inputDay = document.querySelector('.day input');
  let labelDay = document.querySelector('.day label');
  let errorDay = document.querySelector('.errorDay');


  let inputMonth = document.querySelector('.month input');
  let labelMonth = document.querySelector('.month label');
  let errorMonth = document.querySelector('.errorMonth');


  let inputYear = document.querySelector('.year input');
  let labelYear = document.querySelector('.year label');
  let errorYear = document.querySelector('.errorYear');

  if (dayFromUser > 31) {

    errorDay.innerHTML = 'Must be a valid date';
    inputDay.style.borderColor = 'hsl(0, 100%, 67%)'
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    errorDay.style.display = 'block';
    return
  }

  if (monthFromUser == 4 && dayFromUser > 30 || monthFromUser == 6 && dayFromUser > 30 || monthFromUser == 9 && dayFromUser > 30 || monthFromUser == 11 && dayFromUser > 30 || monthFromUser == 2 && dayFromUser > 29) {
    errorDay.innerHTML = 'Must be a valid date';
    inputDay.style.borderColor = 'hsl(0, 100%, 67%)'
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    errorDay.style.display = 'block';
    return
  }

  if (monthFromUser > 12) {

    errorMonth.innerHTML = 'Must be a valid month';
    inputMonth.style.borderColor = 'hsl(0, 100%, 67%)'
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    errorMonth.style.display = 'block';
    return
  }


  if (yearFromUser > 2023) {
    // console.log(yearFromUser, curYear)

    errorYear.innerHTML = 'Must be in the past year';
    inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    errorYear.style.display = 'block';
    return
  }

  //IF THE USER LEFT THE INPUT EMPTY

  if (isNaN(dayFromUser) || isNaN(monthFromUser) || isNaN(yearFromUser)) {
    console.log('ok')
    errorDay.innerHTML = 'This field is required';
    inputDay.style.borderColor = 'hsl(0, 100%, 67%)'
    labelDay.style.color = 'hsl(0, 100%, 67%)';
    errorDay.style.display = 'block';

    errorMonth.innerHTML = 'This field is required';
    inputMonth.style.borderColor = 'hsl(0, 100%, 67%)'
    labelMonth.style.color = 'hsl(0, 100%, 67%)';
    errorMonth.style.display = 'block';

    errorYear.innerHTML = 'This field is required';
    inputYear.style.borderColor = 'hsl(0, 100%, 67%)'
    labelYear.style.color = 'hsl(0, 100%, 67%)';
    errorYear.style.display = 'block';
    return
  }

  const date = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };

  let currentDate = String(date.toLocaleDateString("en-US", options));
  //CURRENT DATE RECEIVED FROM MACHINE
  var [curMonth, curDay, curYear] = currentDate.split("/");


  //USER NOT ABLE TO ENTER THE DATE GREATER THAN THE CURRENT DATE

  if (dayFromUser > parseInt(curDay) && monthFromUser > parseInt(curMonth) && yearFromUser > parseInt(curYear)) {
    let dateError = document.getElementById('dateError');
    dateError.innerHTML = 'Date of birth needs to be earlier than the age at date'
    dateError.style.display = 'block'
    return
  }



  // iF the user use single digit for  month 
  if (curMonth.length == 1) {
    curMonth = "0" + curMonth;
  }

  //  iF the user use single digit for  day
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
  //CONDITIONS FOR DAYS
  if (dayFromUser > parseInt(curDay)) {
    day = parseInt(curDay) - dayFromUser + monthDay[month];
    month--;
  } else {
    day = parseInt(curDay) - monthFromUser;
  }

  // console.log(day, month, year);

  let years = document.getElementById('years');
  let months = document.getElementById('months');
  let days = document.getElementById('days');

  years.innerHTML = year;
  months.innerHTML = month;
  days.innerHTML = day;

});

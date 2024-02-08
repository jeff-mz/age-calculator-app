"use strict";
const $ = document;

const dayInput = $.querySelector("#birth-day");
const monthInput = $.querySelector("#birth-month");
const yearInput = $.querySelector("#birth-year");
const days = $.querySelector(".age-days");
const months = $.querySelector(".age-months");
const years = $.querySelector(".age-years");
const message = $.querySelectorAll(".err-msg");

let now = new Date();
let birthDay = 0;
let birthMonth = 0;
let birthYear = 0;
let currentYear = now.getFullYear();
let currentMonth = now.getMonth() + 1;
let currentDate = now.getDate();
let age = {};

const calcAge = function () {
  let yearAge, monthAge, dayAge;

  //get years
  // yearAge = currentYear - dobYear;
  yearAge = currentYear - birthYear;

  //get months
  if (currentMonth >= birthMonth)
    //get months when current month is greater
    monthAge = currentMonth - birthMonth;
  else {
    yearAge--;
    monthAge = 12 + currentMonth - birthMonth;
  }
  //get days
  if (currentDate >= birthDay)
    //get days when the current date is greater
    dayAge = currentDate - birthDay;
  else {
    monthAge--;
    dayAge = 31 + currentDate - birthDay;
  }
  if (monthAge < 0) {
    monthAge = 11;
    yearAge--;
  }
  //group the age in a single variable
  age = {
    years: yearAge,
    months: monthAge,
    days: dayAge,
  };

  days.textContent = `${age.days}`;
  months.textContent = `${age.months}`;
  years.textContent = `${age.years}`;
  dayInput.value = monthInput.value = yearInput.value = "";
  dayInput.focus();
};
dayInput.addEventListener("keydown", (el) => {
  if (el.key === "Enter") {
    if (dayInput.value === "") {
      message[0].textContent = `This Field is required!`;
      message[0].style.color = "#ff5757";
      setTimeout(() => {
        message[0].textContent = `Enter Date And Hit Enter`;
        message[0].style.color = "#716f6f";
        dayInput.value = "";
      }, 2000);
    } else if (dayInput.value > 31 || dayInput.value <= 0) {
      message[0].textContent = `Enter a valid date!`;
      message[0].style.color = "#ff5757";
      setTimeout(() => {
        message[0].textContent = `Enter Date And Hit Enter`;
        message[0].style.color = "#716f6f";
        dayInput.value = "";
      }, 2000);
    } else {
      birthDay = parseInt(dayInput.value);
      monthInput.focus();
    }
  }
});

monthInput.addEventListener("keydown", (el) => {
  if (el.key === "Enter") {
    if (monthInput.value === "") {
      message[1].textContent = `This Field is required!`;
      message[1].style.color = "#ff5757";
      setTimeout(() => {
        message[1].textContent = `Enter Date And Hit Enter`;
        message[1].style.color = "#716f6f";
        monthInput.value = "";
      }, 2000);
    } else if (monthInput.value > 12 || monthInput.value <= 0) {
      message[1].textContent = `Enter a valid date!`;
      message[1].style.color = "#ff5757";
      setTimeout(() => {
        message[1].textContent = `Enter Date And Hit Enter`;
        message[1].style.color = "#716f6f";
        monthInput.value = "";
      }, 2000);
    } else {
      birthMonth = parseInt(monthInput.value);
      yearInput.focus();
    }
  }
});

yearInput.addEventListener("keydown", (el) => {
  if (el.key === "Enter") {
    if (yearInput.value === "") {
      message[2].textContent = `This Field is required!`;
      message[2].style.color = "#ff5757";
      setTimeout(() => {
        message[2].textContent = `Enter Date And Hit Enter`;
        message[2].style.color = "#716f6f";
        yearInput.value = "";
      }, 2000);
    } else if (yearInput.value > now.getFullYear()) {
      message[2].textContent = `This must be in past!`;
      message[2].style.color = "#ff5757";
      setTimeout(() => {
        message[2].textContent = `Enter Date And Hit Enter`;
        message[2].style.color = "#716f6f";
        yearInput.value = "";
      }, 2000);
    } else {
      birthYear = parseInt(yearInput.value);
      calcAge();
    }
  }
});

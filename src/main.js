var habits = [];
var reminders = [];
var itemId = Int32Array;

window.addEventListener("load", function appLoaded() {
  console.log("App loaded");
});

function addHabit() {
  var habit = { "habitId": "", "name": "", "days": [] };
  habits.push(habit);

  console.log("habits array: " + JSON.stringify(habits));
}

function addReminder() {
  var reminder = { "reminderId": "", "habitId": "", "weekDays": [], "hour": "" };
  reminders.push(reminder);

  console.log("reminders array: " + JSON.stringify(reminders));
}

//debug comands

function clearAll() {
  habits = [];
  reminders = [];

  console.log("habits array: " + JSON.stringify(habits));
  console.log("reminders array: " + JSON.stringify(reminders));
}

//document event listeners

document.querySelector('#add-habit').addEventListener("click", function clickPlus() {
  addHabit();
});

document.querySelector('#clear-all').addEventListener("click", function clear() {
  clearAll()
});
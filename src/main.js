var habits = [];
var reminders = [];
var itemId = 0;

window.addEventListener("load", function appLoaded() {
  console.log("App loaded");
});

function addHabit() {
  var habitName = document.querySelector("#habit-name").value;

  if (habitName != "") {
    var habit = { "itemId": itemId, "name": habitName, "days": [] };
    itemId += 1;
    habits.push(habit);

    console.log("habits array: " + JSON.stringify(habits));
  }
}

function addReminder() {
  var reminder = { "itemId": "", "relItemId": "", "weekDays": [], "hour": "" };
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
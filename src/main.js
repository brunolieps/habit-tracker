var habits = [];
var reminders = [];
var itemId = 0;

window.addEventListener("load", function () {
  console.log("App loaded");

  renderHabits();
});

function addHabit() {
  var habitName = document.querySelector("#habit-name").value;

  if (habitName != "") {
    var habit = { "itemId": itemId, "name": habitName, "days": [] };
    itemId += 1;
    habits.push(habit);

    console.log("habits array: " + JSON.stringify(habits));
    renderHabits();
  }
}

function addReminder() {
  var reminderHour = document.querySelector("#timeReminder").value;

  var reminder = { "itemId": itemId, "relItemId": "", "weekDays": [], "hour": reminderHour };
  itemId += 1;
  reminders.push(reminder);

  console.log("reminders array: " + JSON.stringify(reminders));
}

function showContainer(conteinerId) {
  var container = document.getElementById(conteinerId);

  if (container.style.display === 'none') {
    container.style.display = 'flex';
    container.style.animation = 'show 250ms cubic-bezier(0.64, 0.57, 0.67, 1.53)';
  } else {
    container.style.animation = 'hide 250ms linear';
    setTimeout(() => { container.style.display = 'none'; }, 250);
  }
}

async function renderHabits() {
  console.log('Habits rendered');
}

//debug comands

function clearAll() {
  habits = [];
  reminders = [];

  console.log("habits array: " + JSON.stringify(habits));
  console.log("reminders array: " + JSON.stringify(reminders));
}

//document event listeners

document.querySelector('#add-habit').addEventListener("click", function () {
  addHabit();
});

document.querySelector('#clear-all').addEventListener("click", function () {
  clearAll();
});

/*document.querySelector('#add-reminder').addEventListener('click', function () {
  addReminder();
});*/

document.querySelector('#show-habitreg').addEventListener('click', function () {
  showContainer('habitreg-container');
});
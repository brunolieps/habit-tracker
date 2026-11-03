var habits = [];
var reminders = [];
var itemId = 0;

window.addEventListener("load", function () {
  console.log("App loaded");

  renderHabits();
});

//C in CRUD

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

//R in CRUD

async function renderHabits() {
  var habitContainer = document.getElementById('habit-container');
  if (habits !== null) {
    habitContainer.innerHTML = habits.map((habit) => `
      <div id="${habit.itemId}" class="habit-item g-10">
        <h4>${habit.name}</h4>
        <div class="data-placeholder"></div>
        <div class="button-container">
          <button>Excluir</button>
          <button>Editar</button>
          <button>Concluir</button>
        </div>
      </div>
    `).join('');
  }
  console.log('Habits rendered');
}

//Popup

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

//debug comands

function clearAll() {
  habits = [];
  reminders = [];

  renderHabits();
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
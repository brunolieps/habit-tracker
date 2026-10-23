var habits = [];
var reminders = [];

function addHabit(){
  var habit = {"habitId": "","name": "", "days": []};
  habits.push(habit);
}

function addReminder(){
  var reminder = {"reminderId": "", "name": "", "habitId": "", "weekDays": [], "hour": ""};
  reminders.push(reminder);
}
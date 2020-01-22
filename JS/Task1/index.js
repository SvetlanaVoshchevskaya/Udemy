'use strict';
let money;
let time;

const days = 30;

const appDate = {
  expenses: {},
  optinalExpenses: {},
  income: [],
  saving: true
};

function askAnswer() {
  money = +prompt('Your budget at month?', '');
  time = prompt('Enter the date as YYYY-MM-DD', '');

  while (isNaN(money) || money === '' || money === null) {
    money = +prompt('Your budget at month?', '');
  }
  appDate.budget = money;
  appDate.timeDate = time;
}
askAnswer();

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let monthExpenses = prompt('Enter obligatory expenses at this month', '');
    let summExpenses = +prompt('Enter the summ', '');

    if (
      monthExpenses !== '' &&
      summExpenses !== '' &&
      monthExpenses !== null &&
      summExpenses !== null
    ) {
      appDate.expenses[monthExpenses] = summExpenses;
    } else {
      i--;
    }
  }
}
chooseExpenses();

function detectDayBudget() {
  appDate.moneyPerDay = (appDate.budget / days).toFixed();
  alert('Бюджет на день ' + appDate.moneyPerDay);
}

function saving() {
  if (appDate.saving) {
    let summSaving = +prompt('How much saving', '');
    let percent = +prompt('How much percent', '');
    appDate.monthIncoming = (summSaving / 100 / 12) * percent;
    alert(appDate.monthIncoming.toFixed());
  }
}

function chooseOptExpenses() {
  appDate.optinalExpenses = {};
  for (let i = 0; i < 3; i++) {
    let optinalExpenses = prompt('Статья необязательных расходов?', '');
    appDate.optinalExpenses[i + 1] = optinalExpenses;
  }
}
detectDayBudget();
saving();
chooseOptExpenses();
console.log(appDate);

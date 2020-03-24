'use strict';
const startBtn = document.getElementById('start'),
  budgetValue = document.getElementsByClassName('budget-value')[0],
  dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
  levelValue = document.getElementsByClassName('level-value')[0],
  expensesValue = document.getElementsByClassName('expenses-value')[0],
  optionalExpensesValue = document.getElementsByClassName(
    'optionalexpenses-value'
  )[0],
  incomeValue = document.getElementsByClassName('income-value')[0],
  monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
  yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
  expensesItem = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBtn = document.getElementsByTagName('button')[2],
  optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
  incomeItem = document.querySelector('.choose-income'),
  checkSavings = document.querySelector('#savings'),
  sumValue = document.querySelector('.choose-sum'),
  percentValue = document.querySelector('.choose-percent'),
  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

let money;
let time;

const days = 30;

const appDate = {
  expenses: {},
  optinalExpenses: {},
  income: [],
  saving: true,
  askAnswer() {
    money = +prompt('Your budget at month?', '');
    time = prompt('Enter the date as YYYY-MM-DD', '');

    while (isNaN(money) || money === '' || money === null) {
      money = +prompt('Your budget at month?', '');
    }
    appDate.budget = money;
    appDate.timeDate = time;
  },
  chooseExpenses() {
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
  },
  detectDayBudget() {
    appDate.moneyPerDay = (appDate.budget / days).toFixed();
    alert('Бюджет на день ' + appDate.moneyPerDay);
  },
  saving() {
    if (appDate.saving) {
      let summSaving = +prompt('How much saving', '');
      let percent = +prompt('How much percent', '');
      appDate.monthIncoming = (summSaving / 100 / 12) * percent;
      alert(appDate.monthIncoming.toFixed());
    }
  },
  chooseOptExpenses() {
    appDate.optinalExpenses = {};
    for (let i = 1; i < 3; i++) {
      let optinalExpenses = prompt('Статья необязательных расходов?', '');
      appDate.optinalExpenses[i] = optinalExpenses;
    }
  },
  chooseIncome() {
    let incomeItem = prompt(
      'Что приносит дополнительный доход? (перечислите через запятую)',
      ''
    );
    if (
      typeof incomeItem !== 'string' ||
      incomeItem === '' ||
      incomeItem === null
    )
      return;
    appDate.income = incomeItem.split(', ');
    appDate.income.push(prompt(' Что то еще?', ''));
    appDate.income.sort();
    appDate.income.forEach((el, i) =>
      alert('Способы доп. заработка: ' + (i + 1) + ' ' + el)
    );
  }
};

for (let el in appDate) {
  console.log('Наша программа включает в себя данные: ' + el + appDate[el]);
}

appDate.askAnswer();
appDate.chooseExpenses();

appDate.detectDayBudget();
appDate.saving();
appDate.chooseOptExpenses();
appDate.chooseIncome();
console.log(appDate);

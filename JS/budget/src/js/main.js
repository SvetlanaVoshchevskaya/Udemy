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
const disabledBtn = document.querySelectorAll('.data > button');

let money;
let time;

const days = 30;

const appDate = {
  expenses: {},
  optinalExpenses: {},
  income: [],
  saving: false,
  start() {
    time = prompt('Enter the date as YYYY-MM-DD', '');
    money = +prompt('Your budget at month?', '');
    while (isNaN(money) || money === '' || money === null) {
      money = +prompt('Your budget at month?', '');
    }
    this.budget = money;
    this.timeDate = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth();
    dayValue.value = new Date(Date.parse(time)).getDate();
    disabledBtn.forEach((el) => el.removeAttribute('disabled'));
  },
  chooseExpenses() {
    let summ = 0;
    for (let i = 0; i < expensesItem.length; i++) {
      let monthExpenses = expensesItem[i].value;
      let summExpenses = +expensesItem[++i].value;

      if (
        monthExpenses !== '' &&
        summExpenses !== '' &&
        monthExpenses !== null &&
        summExpenses !== null
      ) {
        this.expenses[monthExpenses] = summExpenses;
        summ += summExpenses;
      } else {
        i--;
      }
    }
    expensesValue.textContent = summ;
  },
  detectDayBudget() {
    if (this.budget !== undefined && expensesValue.textContent === '') {
      this.moneyPerDay = (this.budget / days).toFixed();
      dayBudgetValue.textContent = this.moneyPerDay;
      if (this.moneyPerDay < 100) {
        levelValue.textContent = 'Минимальный уровень дохода';
      } else if (this.moneyPerDay > 100 && this.moneyPerDay < 2000) {
        levelValue.textContent = 'Средний уровень дохода';
      } else if (this.moneyPerDay > 2000) {
        levelValue.textContent = 'Высокий уровень дохода';
      } else {
        levelValue.textContent = 'Богач!';
      }
    } else if (this.budget !== undefined && expensesValue.textContent !== '') {
      const expenses = +expensesValue.textContent;
      this.moneyPerDay = ((this.budget - expenses) / days).toFixed();
      dayBudgetValue.textContent = this.moneyPerDay;
      if (this.moneyPerDay < 100) {
        levelValue.textContent = 'Минимальный уровень дохода';
      } else if (this.moneyPerDay > 100 && this.moneyPerDay < 2000) {
        levelValue.textContent = 'Средний уровень дохода';
      } else if (this.moneyPerDay > 2000) {
        levelValue.textContent = 'Высокий уровень дохода';
      } else {
        levelValue.textContent = 'Богач!';
      }
    } else {
      dayBudgetValue.textContent = 'Произошла ошибка! Начните рассчет!';
    }
  },
  countSaving() {
    if (this.saving) {
      let summSaving = +sumValue.value;
      let percent = +percentValue.value;
      this.monthIncoming = (summSaving / 100 / 12) * percent;
      this.yearIncoming = (summSaving / 100) * percent;
      monthSavingsValue.textContent = this.monthIncoming.toFixed(2);
      yearSavingsValue.textContent = this.yearIncoming.toFixed(2);
    }
  },
  chooseOptExpenses() {
    this.optinalExpenses = {};
    for (let i = 0; i < optionalExpensesItem.length; i++) {
      let optinalExpenses = optionalExpensesItem[i].value;
      this.optinalExpenses[i] = optinalExpenses;
      optionalExpensesValue.textContent += `${this.optinalExpenses[i]}, `;
    }
  },
  chooseIncome() {
    let income = incomeItem.value;
    this.income = income.split(', ');
    incomeValue.textContent = this.income;
    // if (
    //   typeof incomeItem !== 'string' ||
    //   incomeItem === '' ||
    //   incomeItem === nulle
    // )
    //   return;
    // this.income = incomeItem.split(', ');
    // this.income.push(prompt(' Что то еще?', ''));
    // this.income.sort();
    // this.income.forEach((el, i) =>
    //   alert('Способы доп. заработка: ' + (i + 1) + ' ' + el)
    // );
  },
  getSaving() {
    if (this.saving === true) {
      this.saving = false;
    } else {
      this.saving = true;
    }
  },
  setDisabledToBtn() {
    if (this.budget === undefined) {
      disabledBtn.forEach((el) => el.setAttribute('disabled', 'disabled'));
    }
  }
};

// for (let el in appDate) {
//   console.log('Наша программа включает в себя данные: ' + el + appDate[el]);
// }

// this.askAnswer();
// this.chooseExpenses();

// this.detectDayBudget();
// this.saving();
// this.chooseOptExpenses();
// this.chooseIncome();

startBtn.addEventListener('click', appDate.start.bind(appDate));
expensesBtn.addEventListener('click', appDate.chooseExpenses.bind(appDate));
optionalExpensesBtn.addEventListener(
  'click',
  appDate.chooseOptExpenses.bind(appDate)
);
countBtn.addEventListener('click', appDate.detectDayBudget.bind(appDate));
incomeItem.addEventListener('input', appDate.chooseIncome.bind(appDate));
checkSavings.addEventListener('click', appDate.getSaving.bind(appDate));
sumValue.addEventListener('input', appDate.countSaving.bind(appDate));
percentValue.addEventListener('input', appDate.countSaving.bind(appDate));
document.addEventListener(
  'DOMContentLoaded',
  appDate.setDisabledToBtn.bind(appDate)
);

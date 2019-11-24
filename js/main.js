"use strict";

let money,
    time,
    btn_start          = document.getElementById("start"),
    name_budget        = document.getElementsByClassName("budget"),
    value_budget       = document.getElementsByClassName("budget-value"),
    name_daybudget     = document.getElementsByClassName("daybudget"),
    value_daybudget    = document.getElementsByClassName("daybudget-value"),
    name_level         = document.getElementsByClassName("level"),
    value_level        = document.getElementsByClassName("level-value"),
    name_expenses      = document.getElementsByClassName("expenses"),
    value_expenses     = document.getElementsByClassName("expenses-value"),
    name_optionalexp   = document.getElementsByClassName("optionalexpenses")[1],
    value_optionalexp  = document.getElementsByClassName("optionalexpenses-value"),
    name_income        = document.getElementsByClassName("income"),
    value_income       = document.getElementsByClassName("income-value"),
    name_monthsavings  = document.getElementsByClassName("monthsavings"),
    value_monthsavings = document.getElementsByClassName("monthsavings-value"),
    name_yearsavings   = document.getElementsByClassName("yearsavings"),
    value_yearsavings  = document.getElementsByClassName("yearsavings-value"),

    firstExpenses  = document.getElementsByClassName("expenses-item")[0],
    firstPrise     = document.getElementsByClassName("expenses-item")[1],
    secondExpenses = document.getElementsByClassName("expenses-item")[2],
    secondPrise    = document.getElementsByClassName("expenses-item")[3],

    btn_expenses         = document.getElementsByTagName("button")[0],
    btn_optionalexpenses = document.getElementsByTagName("button")[1],
    btn_count_budget     = document.getElementsByTagName("button")[2],

    optionalExp_1 = document.querySelectorAll(".optionalexpenses-item")[0],
    optionalExp_2 = document.querySelectorAll(".optionalexpenses-item")[1],
    optionalExp_3 = document.querySelectorAll(".optionalexpenses-item")[2],

    incomeItems    = document.querySelector(".choose-income"),
    checkBox_field = document.querySelector("#savings"),
    sum_field      = document.querySelector(".choose-sum"),
    percent_field  = document.querySelector(".choose-percent");

                                  

// function start() {
//   money = +prompt("Ваш бюджет на месяц?", "");
//   time = prompt("Введите дату в формате YYYY-MM-DD", "");

//   while (isNaN(money) || money === "" || money === null) {
//     money = +prompt("Ваш бюджет на месяц?", "");
//   }
// }
// start();


let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  choosExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let mandatoryExpenseItem = prompt("Введите обязательную статью расходов в этом месяце", ""),
        howMuch = prompt("Во сколько обойдется?", "");
      // проверка на отмнену
      // проверка на пустую строку
      // ограниечение до 50 символов
      if (mandatoryExpenseItem != null &&
        mandatoryExpenseItem != "" &&
        mandatoryExpenseItem.length <= 50 &&
        howMuch != null &&
        howMuch != "" &&
        howMuch.length <= 50) {
        appData.expenses[mandatoryExpenseItem] = howMuch;
      } else {
        i--;
      }
    }
  },
  // расчёт дневного бюджета
  detectDayBadget: function () {
    appData.moneyPerDay = appData.budget / 30;
    alert(`Ежедневный бюждет ${appData.moneyPerDay}`);
  },
  // расчёт уровня достатка
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Что то пошло не так!");
    }
  },
  checkSavings: function () {
    if (appData.savings === true) {
      let saving = +prompt("Какова сумма накоплений?", ""),
        persent = +prompt("Под какой годовой процент?", "");

      appData.monthIncome = saving / 100 / 12 * persent;
      alert(`Доход с Вашего депозита в месяц ${appData.monthIncome}`);
    }
  },
  // функция для определения не обязательных расходов
  choosOptExpenses: function () {
    for (let i = 0; i <= 3; i++) {
      let questionOptExpenses = prompt("Статья не обязательных расходов?", "");
      appData.optionalExpenses[i] = questionOptExpenses;
    }
    console.log(appData.optionalExpenses);
  },
  choosIncome: function () {
    let spinOf = prompt("Что принесёт дополительный доход. (Укажите через запятую)", "");

    if (spinOf != typeof (string) &&
      spinOf != "" &&
      spinOf != null) {
      appData.income = spinOf.split(", ");
      appData.income.push(prompt("Может что то ещё?", ""));
      appData.income.sort(function (a, b) {
        return a - b;
      });
    }
    let count = 1;
    appData.income.forEach(function(i, item) {
      console.log(`Способы доп. заработка: ${count++} ${i}`);
    });
  }
};

for (let key in appData) {
  console.log( `Наша программа включает в себя данные: ${key} - ${appData[key]}` );
};
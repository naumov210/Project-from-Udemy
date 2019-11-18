'use strict';

let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

  while (isNaN(money) || money === '' || money === null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}
start();


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
        mandatoryExpenseItem != '' &&
        mandatoryExpenseItem.length <= 50 &&
        howMuch != null &&
        howMuch != '' &&
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
  detectLvel: function () {
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Что то пошло не так!');
    }
  },
  checkSavings: function () {
    if (appData.savings === true) {
      let saving = +prompt('Какова сумма накоплений?', ''),
        persent = +prompt('Под какой годовой процент?', '');

      appData.monthIncome = saving / 100 / 12 * persent;
      alert(`Доход с Вашего депозита в месяц ${appData.monthIncome}`);
    }
  },
  // функция для определения не обязательных расходов
  choosOptExpenses: function () {
    for (let i = 0; i <= 3; i++) {
      let questionOptExpenses = prompt('Статья не обязательных расходов?', '');
      appData.optionalExpenses[i] = questionOptExpenses;
    }
    console.log(appData.optionalExpenses);
  },
  choosIncome: function () {
    let spinOf = prompt('Что принесёт дополительный доход. (Укажите через запятую)', '');

    if (spinOf != typeof (string) &&
      spinOf != '' &&
      spinOf != null) {
      appData.income = spinOf.split(', ');
      appData.income.push(prompt('Может что то ещё?', ''));
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
  console.log( "Наша программа включает в себя данные: " + appData[key] );
};
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
};


function choosExpenses() {
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
}
choosExpenses();


// вариант с while
// let i = 0;
// while(i < 2) {
//   let mandatoryExpenseItem = prompt("Введите обязательную статью расходов в этом месяце", ""),
//                    howMuch = prompt("Во сколько обойдется?", "");
// // проверка на отмнену
// // проверка на пустую строку
// // ограниечение до 50 символов
//   if (mandatoryExpenseItem != null &&
//       mandatoryExpenseItem != '' &&
//       mandatoryExpenseItem.length < 50 &&
//       howMuch != null &&
//       howMuch != '' &&
//       howMuch.length < 50 ) {
//     appData.expenses[mandatoryExpenseItem] = howMuch;
//   } else {
//     alert( 'Вы не ввели данные! Попробуйте ещё раз!' );
//     }
//     i++;
// }


// расчёт дневного бюджета
function detectDayBadget() {
  appData.moneyPerDay = appData.budget / 30;
  alert(`Ежедневный бюждет ${appData.moneyPerDay}`);
}
detectDayBadget();


// расчёт уровня достатка
function detectLvel() {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Что то пошло не так!');
  }
}
detectLvel();


function checkSavings() {
  if (appData.savings === true) {
    let saving = +prompt('Какова сумма накоплений?', ''),
      persent = +prompt('Под какой годовой процент?', '');

    appData.monthIncome = saving / 100 / 12 * persent;
    alert(`Доход с Вашего депозита в месяц ${appData.monthIncome}`);
  }
}
checkSavings();


// функция для определения не обязательных расходов
function choosOptExpenses() {
  for (let i = 0; i <= 3; i++) {
    let questionOptExpenses = prompt('Статья не обязательных расходов?', '');
    appData.optionalExpenses[i] = questionOptExpenses;
  }
  console.log(appData.optionalExpenses);
}
choosOptExpenses();
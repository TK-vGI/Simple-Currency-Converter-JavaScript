const input = require('sync-input');

const currency = ['USD', 'JPY', 'EUR', 'RUB', 'GBP'];
const rate = [1, 113.50, 0.89, 74.36, 0.75];

function start() {
    console.log("Welcome to Currency Converter!");
    let l = currency.length;
    for (let i = 0; i < l; i++) {
        console.log('1 USD equals ' + rate[i] + ' ' + currency[i]);
    }
}

function currencyFrom() {
    do {
        let str = input('From: ');
        str = str.trim().toUpperCase();
        if (!currency.includes(str)) {
            console.log('Unknown currency');
            continue;
        }
        return str;
    } while (true);

}

function currencyTo() {
    do {
        let str = input('To: ');
        str = str.trim().toUpperCase();
        if (!currency.includes(str)) {
            console.log('Unknown currency');
            continue;
        }
        return str;
    } while (true);

}

function amount() {
    do {
        let num = Number(input('Amount: '));
        if (num < 1) {
            console.log('The amount cannot be less than 1');
            continue;
        }

        if (isNaN(num)) {
            console.log('The amount has to be a number');
            continue;
        }
        return num;
    } while (true);

}

function result(userChosenCurrencyFrom,userChosenCurrencyTo,userChosenAmount) {
    let result;
    const indexFrom = currency.indexOf(userChosenCurrencyFrom);
    const indexTo = currency.indexOf(userChosenCurrencyTo);
    const rateFrom = rate[indexFrom];
    const rateTo = rate[indexTo];
    result = (rateTo / rateFrom) * userChosenAmount;
    result = result.toFixed(4);

    console.log(`Result: ${userChosenAmount} ${userChosenCurrencyFrom} equals ${result} ${userChosenCurrencyTo}`);
}

//Algorithm
start();
while (true) {
    console.log('What do you want to do?');
    console.log('1-Convert currencies 2-Exit program');
    let userChoice = input();
    // Checks if input is 1 or 2. Cycles if not.
    if (!(userChoice === '1' || userChoice === '2')) {
        console.log('Unknown input')
        continue;
    }
    if (userChoice === "1") {
        console.log("What do you want to convert?");
        let userChosenCurrencyFrom = currencyFrom();
        let userChosenCurrencyTo = currencyTo();
        let userChosenAmount = amount();
        result(userChosenCurrencyFrom,userChosenCurrencyTo,userChosenAmount);
    } else {
        console.log('Have a nice day!');
        break;
    }
}


"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant;
	discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant > 0) {
		arr.push((-b + Math.sqrt(discriminant))/(2 * a));
		arr.push((-b - Math.sqrt(discriminant))/(2 * a));
	} else if (discriminant === 0) {
		arr.push(-b/(2 * a));
	}
	return arr;
	console.log(arr);
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let loanBody = 0;
    let sumEveryMonth = 0;
    let p12 = 0;
    let paymentMonth = 0;
// percent - процентная ставка
// contribution - сумма первоначального взноса
// amount - сумма кредита
// countMonths - длительность кредита в месяцах
// loanBody - тело кредита
    loanBody = amount - contribution;
    p12 = percent / (100 * 12);
    for (let i = 1; i <= countMonths; i++) {
        paymentMonth = loanBody * (p12 + p12 / (Math.pow(1 + p12, countMonths) - 1));
        sumEveryMonth = sumEveryMonth + paymentMonth;
    }
    return +sumEveryMonth.toFixed(2)
    console.log("Ответ: ", +sumEveryMonth.toFixed(2));
}
// listen for submit
document.getElementById('loan-form').addEventListener('submit' , calResult);

function calResult(e){
console.log('Calculating...')

// UI vars

const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');

const monthlyPay = document.getElementById('monthly-payment');
const totalPay = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

const principal = parseFloat(amount.value); // turn into float
const calculatedInterest = parseFloat(interest.amount) /100 /12;//% and monthly
const calculatedPayment = parseFloat(years.value)*12 ;

  e.preventDefault();
}
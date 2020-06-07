// listen for submit
document.getElementById('loan-form').addEventListener('submit' , calResult);

function calResult(e){
// console.log('Calculating...')

// UI vars

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value); // turn into float
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;//% and monthly
  const calculatedPayment = parseFloat(years.value) * 12;


  // Calculate monthly payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal*x*calculatedInterest)/(x-1);

//validate monthly---- //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite

if(isFinite(monthly)){

  monthlyPayment.value = monthly.toFixed(2);//to get 2 decimal 
  totalPayment.value = (monthly * calculatedPayment).toFixed(2);
  totalInterest.value = ((monthly * calculatedPayment)-principal).toFixed(2);
} else{
showError('Please check your numbers');

}
  e.preventDefault();
}
//show the error
function showError(error){
  // 1-Create a div 
  const errorDiv = document.createElement('div');
// 4-Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading')

  // 2-Add class to div because of bootstrap
  errorDiv.className = 'alert alert-danger';

  // 3-Create text Node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // 5-Insert error above heading
  card.insertBefore(errorDiv, heading);
  //6- Clear error
  setTimeout(clearError, 2000);
};
//7- Make clearError
function clearError(){
  document.querySelector('.alert').remove();
}
window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    'amount': document.getElementById("loan-amount").value, 
    'years': document.getElementById("loan-years").value, 
    'rate': document.getElementById("loan-rate").value
  };

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currUiVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currUiVals));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values['amount'];
  let years = values['years'] * 12;
  let rate = values['rate'] / 100 / 12; 

  let monthly = principle * rate * (Math.pow(1 + rate, years)) / (Math.pow(1 + rate, years) - 1);

  return `${monthly.toFixed(2)}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = `$${monthly}`;
}

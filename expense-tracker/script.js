// Get references to the input fields
let expenseNameInput = document.getElementById("expenseName");
let expenseAmountInput = document.getElementById("amount");
let expenseDateInput = document.getElementById("date");
let expenseListUl = document.getElementById("expenseList");
let totalAmountSpan = document.getElementById("totalAmount");

function addExpense() {
  // Retrieve existing expenses from localStorage or initialize an empty array
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Create a new expense object
  const expense = {
    id: Date.now(),
    name: expenseNameInput.value,
    amount: parseFloat(expenseAmountInput.value),
    date: expenseDateInput.value,
  };

  // Add the new expense to the expenses array
  expenses.push(expense);

  // Store the updated expenses array back into localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));

  // Clear the input fields
  expenseNameInput.value = "";
  expenseAmountInput.value = "";
  expenseDateInput.value = "";

  displayExpenses();
}

// Displaying the expense details here
function displayExpenses() {
  // Getting expenses
  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Clear the existing list
  expenseListUl.innerHTML = "";

  // Total
  let total = 0;

  if (expenses.length > 0) {
    expenses.forEach((expense) => {
      // Creating Li
      let expenseLi = document.createElement("li");
      expenseLi.id = "expenseId";

      // Setting total
      total += expense.amount;

      // Adding li data
      expenseLi.innerHTML = `
        <span class="expense-name">${expense.name}</span> - 
        $<span class="expense-amount">${expense.amount}</span> on 
        <span class="expense-date">${expense.date}</span>
        <button onclick="removeExpense(event)">Remove</button>
      `;

      // Appending to the expenses ul list here
      expenseListUl.appendChild(expenseLi);
    });
  }

  // Adding total
  totalAmountSpan.textContent = parseFloat(total).toFixed(2);
}
expenseListUl.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    removeExpense(event);
  }
});

function removeExpense(event) {
  let button = event.target;
  let ourli = button.closest("li");
  let expenseId = ourli.id;

  //removing from local storage
  let expenses = JSON.parse(localStorage.getItem("expenses"));
  expenses = expenses.filter((e) => {
    e.id != expenseId;
  });

  //calculating total after removal
  let total = 0;
  expenses.forEach((expense) => {
    total += expense.amount;
  });

  localStorage.setItem("expenses", JSON.stringify(expenses));

  //remove from DOM too
  expenseListUl.removeChild(ourLi);

  //updating total after removal
  totalAmountSpan.textContent = parseFloat(total).toFixed(2);
}

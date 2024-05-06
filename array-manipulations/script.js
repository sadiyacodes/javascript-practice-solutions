function filterEvenNumbers() {
  let inputItems = document.getElementById("arrayInput").value;
  let inputArray = inputItems
    .split(",")
    .map((item) => parseInt(item.trim(), 10));

  let newArray = inputArray.filter((item) => item % 2 === 0);

  document.getElementById("result").innerHTML = "[" + newArray.join(", ") + "]";
}
function filterOddNumbers() {
  var inputArr = document.getElementById("arrayInput").value;
  var display = document.getElementById("result");

  let arr = inputArr.split(",").map((item) => parseInt(item.trim()));

  let newArray = [];
  newArray = arr.filter((item) => item % 2 !== 0 && !isNaN(item));

  display.innerHTML = "[" + newArray.join(", ") + "]";
}
function reverseArray() {
  var inputArr = document.getElementById("arrayInput").value.trim();
  var display = document.getElementById("result");

  let arr = inputArr.split(",").filter(Number).reverse();

  display.textContent = "[" + arr.join(", ") + "]";
}
function sumArray() {
  const inputArr = document.getElementById("arrayInput").value.trim();
  const display = document.getElementById("result");

  let arr = inputArr.split(",").map(Number);

  let sum = arr.reduce((sum, curr) => sum + curr, 0);
  display.textContent = sum;
}
function filterPrimes() {
  const inputArr = document.getElementById("arrayInput").value.trim();
  const display = document.getElementById("result");

  let arr = inputArr.split(",").filter(Number).map(Number);

  let newArr = [];
  newArr = arr.filter(isPrime);
  display.textContent = "[" + newArr.join(", ") + "]";
}
function isPrime(elem) {
  if (elem < 2) return false;
  for (let i = 2; i <= Math.sqrt(elem); i++) {
    if (elem % i === 0) {
      return false;
    }
  }
  return true;
}

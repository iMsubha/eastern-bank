//login button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transactionArea = document.getElementById("transaction-area");
  transactionArea.style.display = "block";
});

//deposit event handler
document.getElementById("addDeposit").addEventListener("click", function () {
const depositAmount = value("depositAmount");
  updateAmount(depositAmount, "currentDeposit");
  document.getElementById("depositAmount").value = "";
  updateAmount(depositAmount, "currentBalance");
});

//withdraw event handler
document.getElementById("addWithdraw").addEventListener("click", function () {
  const withdrawAmount = value("withdrawAmount");
  document.getElementById("withdrawAmount").value = "";
  updateAmount(withdrawAmount, "currentWithdraw");
  updateAmount(-1 * withdrawAmount, "currentBalance");
});

function updateAmount(amount, id) {
  const currentAmount = parseFloat(document.getElementById(id).innerText);
  const totalAmount = currentAmount + amount;
  document.getElementById(id).innerText = totalAmount;
}

function value(id) {
  return parseFloat(document.getElementById(id).value);
}

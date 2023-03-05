$(document).ready(function () {
  $("#convert").click(function () {
    var amount = $("#amount").val();
    var exchangeRate = 73.23;
    var result = amount * exchangeRate;
    $("#result").text("Amount in INR: " + result.toFixed(2));
  });
});

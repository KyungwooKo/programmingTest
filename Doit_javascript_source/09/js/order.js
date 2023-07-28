var check = document.querySelector("#shippingInfo");

check.addEventListener("click", function () {
  if (check.checked == true) {
    document.querySelector("#shippingName").value = document.querySelector("#billingName").value;
  } else {
    document.querySelector("#shippingName").value = "";
  }
});

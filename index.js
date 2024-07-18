document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.target;

  //... create your form object with the form inputs
  let formObject = {
    email: form.email.value,
    phone: form.phone.value,
  };

  dataLayer.push({
    event: "purchaseCompletedEC",
    hashCustomerEmail: formObject.email,
    hashCustomerPhone: formObject.phone,
  });
});

document.querySelector("form").addEventListener("submit", (event) => {
  const form = event.target;

  //... create your form object with the form inputs
  let formObject = {
    email: form.email.value,
    phone: form.phone.value,
  };

  dataLayer.push({
    event: "purchaseCompletedEC",
    unhashCustomerEmail: formObject.email,
    unhashCustomerPhone: formObject.phone,
  });
});

const message = document.querySelector(".thank-you-message");

document.querySelector("#unhashed-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;

  //... create your form object with the form inputs
  let formObject = {
    email: form.email.value,
    phone: form.phone.value,
  };

  dataLayer.push({
    event: "annaPurchaseEC",
    customerEmail: formObject.email,
    customerPhone: formObject.phone,
  });

  message.innerText = "Successfully submit form";
});

document
  .querySelector("#hashed-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;

    //... create your form object with the form inputs
    let formObject = {
      email: await hash(form.email.value),
      phone: await hash(form.phone.value),
    };

    dataLayer.push({
      event: "annaPurchaseEC",
      customerEmail: formObject.email,
      customerPhone: formObject.phone,
    });

    message.innerText = "Successfully submit form";
  });

async function hash(string) {
  const utf8 = new TextEncoder().encode(string);
  const hashBuffer = await crypto.subtle.digest("SHA-256", utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((bytes) => bytes.toString(16).padStart(2, "0"))
    .join("");
  return hashHex;
}

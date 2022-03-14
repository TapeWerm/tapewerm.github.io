let form = document.querySelector("#contact-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    console.group("Contact form");
    console.log("Name:", form.name.value);
    console.log("Email:", form.email.value);
    console.log("Message:", form.message.value);
    console.groupEnd();
    return false;
}
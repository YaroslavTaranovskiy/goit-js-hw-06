const checkForm = document.querySelector(".login-form");

checkForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  
  // const formData = new FormData(event.currentTarget);
  // const data = {};
  // formData.forEach((name, value) => {
  //   if (!name || !value) {
  //     alert("Все поля должны быть заполнены...");
  //   } else {
  //     data[value] = name;
  //   }
  // });
  // if (data.email && data.password) {
  //   console.log(data);
  //   event.currentTarget.reset();
  // }

  const formEl = event.currentTarget.elements;
  const email = formEl.email;
  const password = formEl.password;

  if (email.value === "" || password.value === "") {
    return alert('Все поля должны быть заполнены...');
  }
  console.log({ email: email.value, password: password.value });
  checkForm.reset();
}

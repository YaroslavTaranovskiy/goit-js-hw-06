const checkForm = document.querySelector(".login-form");

checkForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.currentTarget);
  const data = {};
  formData.forEach((name, value) => {
    if (!name || !value) {
      alert("Все поля должны быть заполнены...");
    } else {
      data[value] = name;
    }
  });
  if (data.email && data.password) {
    console.log(data);
    event.currentTarget.reset();
  }
}

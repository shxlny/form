document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = form.elements.fullName.value.trim();
    if (!fullName) {
      alert("Пожалуйста, введите ФИО");
      return;
    }

    const formData = {
      fullName: fullName,
      gender: form.querySelector('input[name="gender"]:checked')?.value,
      password: form.elements.password.value,
      country: form.elements.country.value,
      choices: [
        form.elements.icecream.checked ? "Мороженое" : null,
        form.elements.meat.checked ? "Мясо" : null,
        form.elements.salad.checked ? "Салат" : null,
      ].filter(Boolean),
      comments: form.elements.comments.value.trim(),
    };

    console.log("Данные формы:", formData);

    alert("Форма успешно отправлена! Проверьте консоль для просмотра данных.");
    form.reset();
  });

  const inputs = form.querySelectorAll("input, textarea, select");
  inputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.style.borderColor = "#4CAF50";
      this.style.boxShadow = "0 0 5px rgba(76, 175, 80, 0.3)";
    });

    input.addEventListener("blur", function () {
      this.style.borderColor = "#ddd";
      this.style.boxShadow = "none";
    });
  });
});

const modal = document.getElementsByClassName("modal")[0];
const btn = document.getElementById("openModal");
const btn1 = document.getElementById("openModal1");
const btn2 = document.getElementById("openModal2");
const span = document.getElementsByClassName("close")[0];
const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

// Объект для хранения данных формы
const formData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    comment: "",
    printData() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    },
};

// Функция для сбора данных из формы
function submitForm() {
    formData.name = document.getElementById("name").value.trim();
    formData.email = document.getElementById("email").value.trim();
    formData.phone = document.getElementById("phone").value.trim();
    formData.date = document.getElementById("date").value.trim();
    formData.comment = document.getElementById("comments").value.trim();
    formData.printData();
}

// Открытие модального окна
btn.onclick = btn1.onclick = btn2.onclick = function () {
    modal.style.display = "flex";
};

// Закрытие модального окна
span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Проверка валидности email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Проверка телефона (содержит только цифры)
function isPhoneValid(phone) {
    return /^\d+$/.test(phone.replace(/\D/g, ""));
}

// Проверка обязательных полей
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const comment = document.getElementById("comments").value.trim();

    if (!name || !email || !comment) {
        alert("Пожалуйста, заполните обязательные поля: Имя, E-mail и Комментарий.");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Введите корректный адрес электронной почты.");
        return false;
    }

    if (!isPhoneValid(phone)) {
        alert("Номер телефона должен содержать только цифры.");
        return false;
    }

    return true;
}

// Обработчик отправки формы
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Проверяем согласие на обработку данных
    if (!document.getElementById("perdan").checked) {
        alert("Согласитесь на обработку персональных данных.");
        return;
    }

    // Выполняем проверки
    if (!validateForm()) {
        return;
    }

    // Сохраняем данные и выводим в консоль
    submitForm();

    // Показываем сообщение об успехе
    successMessage.style.display = "block";
    setTimeout(() => {
        successMessage.style.display = "none";
    }, 2000);

    // Закрываем модальное окно
    modal.style.display = "none";

    // Сбрасываем форму
    form.reset();
});

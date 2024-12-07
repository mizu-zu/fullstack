// Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента по селектору
function toggleVisibility(selector) {
    const element = document.getElementsByClassName(selector)[0];
    if (element) {
        if (element.style.display==="block") {
            element.style.display="none";
        }
        else {
            element.style.display="block";
        }
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}

// Функция для сброса цвета фона к исходному значению
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Функция для вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const time = now.toTimeString().split(" ")[0]; // Формат ЧЧ:ММ:СС
    console.log(`Текущее время: ${time}`);
}

function updateH1WithUtmTerm() {
    // Получаем текущий URL
    const urlParams = new URLSearchParams(window.location.search);

    // Извлекаем значение параметра utm_term
    const utmTerm = urlParams.get("utm_term");

    // Находим элемент H1 на странице
    const h1Element = document.getElementById("zagolovok_h1");

    if (h1Element) {
        // Если utm_term присутствует, меняем текст H1
        if (utmTerm) {
            h1Element.textContent = utmTerm;
        }
        // Если utm_term отсутствует, оставляем текст H1 по умолчанию
    } else {
        console.warn("Элемент <h1> не найден на странице.");
    }
}

// Вызываем функцию после загрузки DOM
document.addEventListener("DOMContentLoaded", updateH1WithUtmTerm);


// Вызов функций после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
    // Сброс цвета фона
    resetBackgroundColor();

    // Изменение цвета фона
    changeBackgroundColor("lightblue");

    // Переключение видимости элемента с классом .content
    toggleVisibility("content");
});

// Вызов функций сразу после определения
showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener('DOMContentLoaded', (event) => {
    loadGreeting();
});

function askUserName() {
    let userName = prompt("Пожалуйста, введите ваше имя:");
    if (userName && userName.trim() !== "") {
        localStorage.setItem('userName', userName);
        loadGreeting();
    } else {
        alert("Имя не может быть пустым.");
    }
}

function loadGreeting() {
    let userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('greeting-message').innerText = `Здравствуйте, ${userName}!`;
    }
}

// Задание №1
function task1() {
    window.location.href = "../Pract1/index.html";
}

// Задание №2
function task2() {
    window.location.href = "../Pract2/index.html";
}

// Викторина по JavaScript
function launchQuiz() {
    let questions = [
        { question: "Что такое JavaScript?", answer: "Язык программирования" },
        { question: "Какие задачи решает JavaScript?", answer: "Интерактивные элементы" },
        { question: "Можно ли использовать JavaScript для проверки форм?", answer: "Да" },
        { question: "Является ли JavaScript серверным языком?", answer: "Нет" },
        { question: "Может ли JavaScript работать с файлами на клиенте?", answer: "Нет" },
        { question: "Как вывести сообщение в консоль?", answer: "console.log" },
        { question: "Как объявить переменную в JavaScript?", answer: "let" },
        { question: "Как создать функцию в JavaScript?", answer: "function" },
        { question: "Как сравнить значения в JavaScript?", answer: "==" },
        { question: "Как добавить элемент в конец массива?", answer: "push" }
    ];

    let userAnswers = [];
    let score = 0;

    questions.forEach((q, index) => {
        let answer = prompt(q.question);
        userAnswers.push({ question: q.question, userAnswer: answer, correctAnswer: q.answer, isCorrect: answer === q.answer });
        if (answer === q.answer) {
            score++;
        }
    });

    let result = `Ваш результат: ${score} из ${questions.length}\n`;
    userAnswers.forEach((ans, index) => {
        result += `\nВопрос ${index + 1}: ${ans.question}\nВаш ответ: ${ans.userAnswer} - ${ans.isCorrect ? "Правильно" : "Неправильно"} (Правильный ответ: ${ans.correctAnswer})\n`;
    });

    document.getElementById('quiz-result').innerText = result;
}

// Полноэкранная заставка
function displayOverlay() {
    let userName = localStorage.getItem('userName') || "Друг";
    let today = new Date();
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('ru-RU', options);

    let overlay = document.getElementById('overlay');
    let content = document.getElementById('overlay-content');
    content.innerHTML = `<p>Приветствую, ${userName}!</p><p>Сегодня: ${formattedDate}</p>`;
    overlay.style.display = "flex";
}

function hideOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = "none";
}

/*
Задание 11-1
Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа (индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

*/
const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('[data-action = "start"]'),
  stopBtn: document.querySelector('[data-action = "stop"]'),
  htmlBody: document.querySelector("body"),
  intervalColorId: null,
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener("click", () => {
  refs.stopBtn.removeAttribute("disabled");
  refs.startBtn.setAttribute("disabled", true);
  refs.intervalColorId = setInterval(() => {
    refs.htmlBody.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  refs.startBtn.removeAttribute("disabled");
  refs.stopBtn.setAttribute("disabled", true);
  clearInterval(refs.intervalColorId);
});

// Укажите дату начала отсчёта
const startDate = new Date("May 03, 2024 00:00:00");

function updateCountdown() {
    // Текущая дата и время
    const now = new Date();

    // Вычисляем разницу во времени между текущим моментом и начальной датой
    const timeDifference = now - startDate;

    // Преобразуем разницу во времени в дни, часы, минуты и секунды
    const totalSeconds = Math.floor(timeDifference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Обновляем значения времени в HTML
    document.getElementById('days').querySelector('.value').textContent = days;
    document.getElementById('hours').querySelector('.value').textContent = hours;
    document.getElementById('minutes').querySelector('.value').textContent = minutes;
    document.getElementById('seconds').querySelector('.value').textContent = seconds;
}

// Обновляем отсчёт времени каждую секунду
setInterval(updateCountdown, 1000);


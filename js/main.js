function openMenu() {
    const burger = document.querySelector('.burger');
    let body = document.body;
    const menu = document.querySelector('.menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('menu-open');
        body.classList.toggle('lock')
    })
}
openMenu();

function getInstallments() {
    let budget = document.querySelector('[data-budget]');
    let duration = document.querySelector('[data-duration]');
    let payment = document.querySelector('[data-payment]');
    let sum = document.querySelector('[data-sum]');

    let budgetVal;
    budget.addEventListener('input', function () {
        budgetVal = this.value;
    })
    let durationVal;
    duration.addEventListener('input', function () {
        if (duration.value > 12 || duration.value < 1) {
            duration.value = '';
            duration.setAttribute('placeholder', 'Введите число от 1 до 12')
        }
        durationVal = this.value;
    })
    let paymentVal;
    payment.addEventListener('input', function () {
        paymentVal = this.value;
        let percent = (budgetVal / 100) * paymentVal;
        let allSum = (budgetVal - percent) / durationVal;
        // sum.innerText = (budgetVal - percent) / durationVal + ' €';
        sum.innerText = Math.floor(allSum * 100) / 100 + ' €'
    })

}
getInstallments()

function countDown() {
    let days = document.querySelector('[data-days]');
    let hours = document.querySelector('[data-hours]');
    let min = document.querySelector('[data-min]');
    let sec = document.querySelector('[data-sec]');

    // получить настоящий год
    let curentYear = new Date().getFullYear();

    // получить след год
    let nextYear = new Date(`4  28 2024 00:00:00`)


    setInterval(function ed() {
        //  получаем настоящее время(полностью, год, месяц, число)
        let curentTime = new Date();

        // получаем разницу между настоящим и следующим годом. От следующего отнимаем настоящий год
        // значение в милисекундах
        let different = nextYear - curentTime;

        // получить дни
        // округляем в меньшую сторону Math.floor
        let daysLeft = Math.floor(different / 1000 / 60 / 60 / 24);

        // получить часы
        let hoursLeft = Math.floor(different / 1000 / 60 / 60) % 24;

        // получить минуты
        let minutesLeft = Math.floor(different / 1000 / 60) % 60;

        // получить секунды
        let secondsLeft = Math.floor(different / 1000) % 60;

        days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        min.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        sec.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

    }, 1000);


}
countDown()

function openSpoiler() {
    let spoilers = document.querySelectorAll('.spoiler');
    spoilers.forEach((spoiler) => {
        let spoilerBtn = spoiler.querySelector('.spoiler-title');
        let spoilerBody = spoiler.querySelector('.spoiler-body')
        spoiler.addEventListener('click', () => {
            spoilerBody.classList.toggle('open')
            spoilerBtn.classList.toggle('open')

            document.addEventListener('click', (e) => {
                if (e.target !== spoilerBtn) {
                    spoilerBody.classList.remove('open')
                    spoilerBtn.classList.remove('open')
                }
            })
        })
    })
}
openSpoiler()

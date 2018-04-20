const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Авгутс', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const monthID = document.querySelector('#month');
const next = document.querySelector('#next');
const back = document.querySelector('#back');

const date = new Date();

monthID.textContent = months[date.getMonth()];

next.addEventListener('click', () => {
    monthID.textContent = months[date.getMonth() + 1];
});

back.addEventListener('click', () => {
    monthID.textContent = months[date.getMonth() - 1];

});



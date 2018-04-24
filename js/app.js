const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Авгутс', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const nameMonth = document.querySelector('#nameMonth       ');
const month = document.querySelector('#month');
const next = document.querySelector('#next');
const back = document.querySelector('#back');
const createMeeting = document.querySelector('#createMeeting');
const createMeetingButton = document.querySelector('#createMeetingButton');
const cancelButton = document.querySelector('#cancelButton');
const createMetingButtonInModal = document.querySelector('#createMetingButtonInModal');
const congratWindow = document.querySelector('#congratWindow');
const congratButtonGood = document.querySelector('#congratButtonGood');
const timeForReserve = document.querySelector('#timeForReserve');
const filterRoom = document.querySelectorAll('#filterRoom input[type="checkbox"]');
const addButton  = document.querySelector('#add')

console.log(filterRoom);

function hideElem(elem) {
    elem.style.display = "none";
}

function showElem(elem) {
    elem.style.display = "block";
}

const date = new Date();

nameMonth.textContent = months[date.getMonth()];

next.addEventListener('click', () => {
    nameMonth.textContent = months[date.getMonth() + 1];
});

back.addEventListener('click', () => {
    nameMonth.textContent = months[date.getMonth() - 1];

});

createMeetingButton.addEventListener('click', () => {
    showElem(createMeeting);
});
cancelButton.addEventListener('click', () => {
    hideElem(createMeeting);

});

createMetingButtonInModal.addEventListener('click', () => {
    showElem(congratWindow);
    hideElem(createMeeting);
});
congratButtonGood.addEventListener('click', () => {
    hideElem(congratWindow);
});

timeForReserve.addEventListener('click', (event) => {
    let target = event.target;
    let a = target.closest('a');
    if (!a) return;
    showElem(createMeeting);


});


var events = [
    {'Date': new Date(2016, 6, 7), 'Title 1': 'Doctor appointment at 3:25pm.'},
    {'Date': new Date(2016, 6, 18), 'Title 2': 'New Garfield movie comes out!', 'Link': 'https://garfield.com'},
    {'Date': new Date(2016, 6, 27), 'Title 3': '25 year anniversary', 'Link': 'https://www.google.com.au/#q=anniversary+gifts'},
];

var settings = {
    Color: '',
    LinkColor: '',
    NavShow: true,
    NavVertical: false,
    NavLocation: '',
    DateTimeShow: true,
    DateTimeFormat: 'mmm, yyyy',
    DatetimeLocation: '',
    EventClick: '',
    EventTargetWholeDay: false,
    DisabledDays: []
    // ModelChange: model
};

var element = document.getElementById('caleandar');
caleandar(element, events, settings);

function createSearch() {
    const search = {};
    let checkboxs = Array.from(filterRoom);
    for (let i = 0; i < checkboxs.length; i++) {
        let obj = checkboxs[i];
        if (obj.checked) {
            search[obj.name] = true;
        }
    }
    return search;
}

addButton.addEventListener('submit', (event) => {
    event.preventDefault();
    createSearch();
});


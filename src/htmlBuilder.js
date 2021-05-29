import imgCard from './templates/imageCard.hbs';
import apiService from './apiService';

const refs = {
    body: document.querySelector('body'),
    inputForm: document.querySelector('#search-form'),
    inputField: document.querySelector('#search-form input'),
    buttonElement: document.createElement('button'),
    ulElement: document.createElement('ul')
};

refs.ulElement.classList.add('gallery');
let btnActive = false;


function listCreating(arr) {
    const cardHtml = arr.map(item => imgCard(item)).join('');
    refs.inputForm.after(refs.ulElement);
    refs.ulElement.insertAdjacentHTML('beforeend', cardHtml);
};

function resetList() {
    refs.ulElement.innerHTML = '';
    refs.buttonElement.remove();
    btnActive = false;
};

function buttonCreating() {
    if (!btnActive) {        
        refs.buttonElement.textContent = 'Показать больше'
        refs.ulElement.after(refs.buttonElement);

        btnActive = true;
        return
    } else { return };
};

async function uploadMore(page) {
    let findWord = refs.inputField.value;
    refs.buttonElement.disabled = true;
    refs.buttonElement.textContent = 'Загружаем...'

    const responce = await apiService(findWord, page, 12).then().catch();
    refs.buttonElement.disabled = false;
    refs.buttonElement.textContent = 'Показать еще'

    const cardHtml = responce.map(item => imgCard(item)).join('');
    refs.ulElement.insertAdjacentHTML('beforeend', cardHtml);

    refs.buttonElement.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
};

export { listCreating, resetList, buttonCreating, uploadMore, refs };
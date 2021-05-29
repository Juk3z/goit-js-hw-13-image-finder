import apiService from './apiService';
import { listCreating, resetList, buttonCreating, uploadMore, refs } from './htmlBuilder';


refs.inputForm.addEventListener('submit', submitHandler);
refs.inputField.addEventListener('change', clearList);

let pageCounter = 0;

async function submitHandler(event) {   
    event.preventDefault();
    let findWord = refs.inputField.value;
    pageCounter += 1;
    const responce = await apiService(findWord, pageCounter, 12).then().catch();
    
    listCreating(responce);
    
    
    if (pageCounter === 1) {
        buttonCreating();
        refs.buttonElement.addEventListener('click', buttonHandler);
    };
};


function buttonHandler() {
    pageCounter += 1;
    console.log(pageCounter, 'внешний пейдж');
    uploadMore(pageCounter);
}


function clearList() {
    pageCounter = 0;
    resetList();
};





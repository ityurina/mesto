//общие правила открытия, закрытия, сохранения введенных значений для всех попапов:
const popup = document.querySelector('.popup');

const popupOpen = (event) => {
    loadUserData();
    popup.classList.add('popup_is-opened');
}

const popupClose = () => {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
}

const formSubmit = (event) => {
    saveUserData()
    popupClose(event);
}

//попап для редактирования профиля:
const editPopup = document.querySelector('.popup_edit');
const editPopupOpenButton = document.querySelector('.profile__edit-btn');
const editPopupCloseButton = editPopup.querySelector('.popup__close');
const editPopupSaveButton = editPopup.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__item_type_name');
const infoInput = document.querySelector('.popup__item_type_info');
const profileName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__userinfo');

const loadUserData = () =>{
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
}

const saveUserData = () =>{
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
}

editPopupOpenButton.addEventListener('click', popupOpen);
editPopupCloseButton.addEventListener('click', popupClose);
editPopupSaveButton.addEventListener('submit', formSubmit);

//массив с контентом для карточек:
const initialCards = [
    {
        name: 'Кольский район',
        link: 'https://res.cloudinary.com/ityurina/image/upload/v1599936042/mesto/teriberka01_cmrrfe.jpg'
    },
    {
        name: 'Кольский район',
        link: 'https://res.cloudinary.com/ityurina/image/upload/v1599936043/mesto/teriberka02_yl1qpz.jpg'
    },
    {
        name: 'Кольский район',
        link: 'https://res.cloudinary.com/ityurina/image/upload/v1599936042/mesto/teriberka03_ne5uwa.jpg'
    },
    {
        name: 'Териберка',
        link: 'https://res.cloudinary.com/ityurina/image/upload/v1599936042/mesto/teriberka04_brc7tr.jpg'
    },
    {
        name: 'Териберка',
        link: 'https://res.cloudinary.com/ityurina/image/upload/v1599936042/mesto/teriberka05_xia8mw.jpg'
    },
    {
        name: 'Териберка',
        link: 'https://res.cloudinary.com/ityurina/image/upload/v1599936042/mesto/teriberka01_cmrrfe.jpg'
    }
];
const template = document.querySelector('.template__card');
const cards = document.querySelector('.elements__list');

function render() {
    initialCards.forEach(renderItem);
}

//копируем темплейт карточки, возвращаем данные из массива, добавляем карточки в ul:
function renderItem({name, link}) {
    const newCard = template.content.cloneNode(true);
    newCard.querySelector('.elements__name').innerText = name;
    newCard.querySelector('.elements__photo').alt = name;
    newCard.querySelector('.elements__photo').src = link;
    cards.appendChild(newCard);
}

render();

//попап для добавления новых карточек:
const addPopup = document.querySelector('.popup__add');
const addPopupOpenButton = document.querySelector('.profile__add-btn');
const addPopupCloseButton = addPopup.querySelector('.popup__close');
const addPopupSaveButton = addPopup.querySelector('.popup__form');
const placeInput = document.querySelector('.popup__item_type_place');
const linkInput = document.querySelector('.popup__item_type_link');

addPopupOpenButton.addEventListener('click', popupOpen);
addPopupCloseButton.addEventListener('click', popupClose);
addPopupSaveButton.addEventListener('submit', formSubmit);
/*
const saveUserData = () =>{
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
}

const popupOpen = (event) => {
    loadUserData();
    popup.classList.add('popup_is-opened');
}

const popupClose = () => {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
}

const formSubmit = (event) => {
    saveUserData()
    popupClose(event);
}

popupAddOpenButton.addEventListener('click', popupOpen);
popupAddSaveButton.addEventListener('submit', formSubmit);
*/

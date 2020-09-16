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

const render = () => {
    initialCards.forEach(renderItem);
}

//копируем темплейт карточки, возвращаем данные из массива, добавляем карточки в ul:
const renderItem = ({name, link}) => {
    const newCard = template.content.cloneNode(true);
    newCard.querySelector('.elements__name').innerText = name;
    newCard.querySelector('.elements__photo').alt = name;
    newCard.querySelector('.elements__photo').src = link;
    cards.appendChild(newCard);
}

render();

//общие функции для всех попапов:
const popup = document.querySelector('.popup');

const popupOpen = (popup) => {
    popup.classList.add('popup_is-opened');
}

const popupClose = (popup, event) => {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
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
const addFormSubmit = document.querySelector('.popup__form_add');

// открываем попап:
const editPopupOpen = () => {
    loadUserData();
    popupOpen(editPopup);
}

// закрываем попап:
const editPopupClose = (event) =>{
    popupClose(editPopup, event)
}

// подгружаем текущие данные профиля в соответствующие инпуты попапа:
const loadUserData = () => {
    nameInput.value = profileName.textContent;
    infoInput.value = profileInfo.textContent;
}

loadUserData();

// передаем введенные в инпуты данные профиля:
const saveUserData = () =>{
    profileName.textContent = nameInput.value;
    profileInfo.textContent = infoInput.value;
}

saveUserData();

// при нажатии на "сохранить" вызываем функции для сохранения данных из инпута и закрытия попапа:
const editFormSubmit = (event) => {
    saveUserData()
    editPopupClose(event);
}

editPopupOpenButton.addEventListener('click', editPopupOpen);
editPopupCloseButton.addEventListener('click', editPopupClose);
editPopupSaveButton.addEventListener('submit', editFormSubmit);


//попап для добавления новых карточек:
const addPopup = document.querySelector('.popup_add');
const addPopupOpenButton = document.querySelector('.profile__add-btn');
const addPopupCloseButton = addPopup.querySelector('.popup__close');
const addPopupSaveButton = addPopup.querySelector('.popup__form');
const placeInput = document.querySelector('.popup__item_type_place');
const linkInput = document.querySelector('.popup__item_type_link');

// открываем попап:
const addPopupOpen = () => {
    loadUserData();
    popupOpen(addPopup);
}

// закрываем попап:
const addPopupClose = (event) =>{
    popupClose(addPopup, event)
}

addPopupOpenButton.addEventListener('click', addPopupOpen);
addPopupCloseButton.addEventListener('click', addPopupClose);
/*
addFormSubmit.addEventListener('submit', (evt) => {
   evt.preventDefault();
   const nameValue = placeInput.value;
   const linkValue = linkInput.value;
   const newCard = {
       name: nameValue,
       link: linkValue
   }

   addPopupClose();
   renderItem(newCard);
*/

//ДУБЛИРОВАНИЕ


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
        link: 'https://res.cloudinary.com/ityurina/image/upload/v1599936042/mesto/teriberka06_dtyycm.jpg'
    }
];
const template = document.querySelector('.template__card');
const cards = document.querySelector('.elements__list');

//копируем темплейт карточки, возвращаем данные из массива, добавляем карточки в ul:
const createCard = ({name, link}) => {
    const card = template.content.cloneNode(true); //клонируем шаблон карточки
    card.querySelector('.elements__name').innerText = name;
    card.querySelector('.elements__photo').alt = name;
    card.querySelector('.elements__photo').src = link;
    return card; // возвращаем карточку с атрибутами элементов, обозначенными выше
}

const render = () => { //вызвали функцию создания карточки
    initialCards.forEach(({name, link}) => { //для каждого элемента массива:
        const card = createCard({name, link}); //передали карточке значения name и link
        cards.appendChild(card); // добавили карточки в ul
    })
}

render();

//общие функции для всех попапов:
const popup = document.querySelector('.popup');

const popupOpen = (popup) => {
    popup.classList.add('popup_is-opened');
}

const popupClose = (popup, event) => {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
}

//попап для редактирования профиля:
const editPopup = document.querySelector('.popup_edit');
const editPopupOpenButton = document.querySelector('.profile__edit-btn');
const editPopupCloseButton = editPopup.querySelector('.popup__close');
const editPopupSaveButton = editPopup.querySelector('.popup__form_edit');
const userNameInput = document.querySelector('.popup__item_type_name');
const userInfoInput = document.querySelector('.popup__item_type_info');
const profileName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__userinfo');

// открываем попап:
const editPopupOpen = () => {
    loadUserData();
    popupOpen(editPopup);
}

// закрываем попап:
const editPopupClose = (event) =>{
    popupClose(editPopup, event)
}

// подгружаем текущие данные профиля в соответствующие инпуты попапа:
const loadUserData = () => {
    userNameInput.value = profileName.textContent;
    userInfoInput.value = profileInfo.textContent;
}

loadUserData();

// передаем введенные в инпуты данные профиля:
const saveUserData = () =>{
    profileName.textContent = userNameInput.value;
    profileInfo.textContent = userInfoInput.value;
}

saveUserData();

// при нажатии на "сохранить" вызываем функции для сохранения данных из инпута и закрытия попапа:
const editFormSubmit = (event) => {
    saveUserData()
    editPopupClose(event);
}

editPopupOpenButton.addEventListener('click', editPopupOpen);
editPopupCloseButton.addEventListener('click', editPopupClose);
editPopupSaveButton.addEventListener('submit', editFormSubmit);


//попап для добавления новых карточек:
const addPopup = document.querySelector('.popup_add');
const addPopupOpenButton = document.querySelector('.profile__add-btn');
const addPopupCloseButton = addPopup.querySelector('.popup__close');
const addPopupSaveButton = addPopup.querySelector('.popup__form_add');
const cardNameInput = document.querySelector('.popup__item_type_place');
const cardLinkInput = document.querySelector('.popup__item_type_link');

// открываем попап:
const addPopupOpen = () => {
    loadUserData();
    popupOpen(addPopup);
}

// закрываем попап:
const addPopupClose = (event) =>{
    popupClose(addPopup, event);
}

// добавление карточки:
const addCard = (name, link) => {
    const card = createCard({name, link});
    cards.prepend(card);
}

// при нажатии на "создать" передаем значения из инпутов в массив для создания новой карточки:
const addFormSubmit = (event) => {
     addCard(cardNameInput.value, cardLinkInput.value);
     addPopupClose(event)
}

addPopupOpenButton.addEventListener('click', addPopupOpen);
addPopupCloseButton.addEventListener('click', addPopupClose);
addPopupSaveButton.addEventListener('submit', addFormSubmit);

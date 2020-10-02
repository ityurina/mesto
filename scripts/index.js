const template = document.querySelector('.template__card'); //шаблон карточки
const cards = document.querySelector('.elements__list');    //список карточек
//попап для просмотра фото:
const galleryPopup = document.querySelector('.popup_gallery');  //попап для просмотра фото
const galleryPopupPhoto = galleryPopup.querySelector('.popup__photo'); //фото в полном размере
const galleryPopupCaption = galleryPopup.querySelector('.popup__caption'); // подпись к фото
//попап для редактирования профиля:
const editPopup = document.querySelector('.popup_edit'); //попап для редактирования профиля
const editPopupOpenButton = document.querySelector('.profile__edit-btn'); //кнопка открытия попапа для редактирования профиля
const editPopupCloseButton = editPopup.querySelector('.popup__close');  //кнопка закрытия попапа для редактирования профиля
const editPopupSaveButton = editPopup.querySelector('.popup__form_edit'); //форма попапа для редактирования профиля
const userNameInput = document.querySelector('.popup__item_type_name'); //инпут с именем пользователя
const userInfoInput = document.querySelector('.popup__item_type_info'); // инпут с инфо
const profileName = document.querySelector('.profile__username'); // имя пользователя в секции на странице
const profileInfo = document.querySelector('.profile__userinfo'); // инфо о пользователе в секции на странице
//попап для добавления новых карточек:
const addPopup = document.querySelector('.popup_add'); //попа для добавления новых карточек
const addPopupOpenButton = document.querySelector('.profile__add-btn'); //кнопка открытия попапа для добавления карточек
const addPopupCloseButton = addPopup.querySelector('.popup__close');  //кнопка закрытия попапа для добавления карточек
const addPopupSaveButton = addPopup.querySelector('.popup__form_add'); //форма попапа для добавления карточек
const cardNameInput = document.querySelector('.popup__item_type_place'); // инпут с названием карточки
const cardLinkInput = document.querySelector('.popup__item_type_link'); // инпут со ссылкой на картинку

//ФУНКЦИИ

// удаление карточки:
const removeCardsItem = (event) => {
    event.preventDefault();
    event.target.closest('.elements__element').remove();
}

// переключение лайка:
const toggleLike= (event) => {
    event.target.classList.toggle('elements__like_active')
};

// открытие просмотра фото:
const openGalleryPopup = (event) => {
    openPopup(galleryPopup);
    const image = event.target.closest('.elements__photo');
    galleryPopupPhoto.src = image.src;
    galleryPopupPhoto.alt = image.alt;
    galleryPopupCaption.textContent = image.alt;
}

// закрытие просмотра фото:
const closeGalleryPopup = (event) => {
    closePopup(galleryPopup, event)
};

// функция со слушателями событий внутри карточек(лайк, удаление карточки, попап для просмотра полноразмерного фото):
const createCardListeners = (card) => {
    const cardImage = card.querySelector('.elements__photo')
    cardImage.addEventListener('click', openGalleryPopup);
    galleryPopup.querySelector('.popup__close').addEventListener('click', closeGalleryPopup);
    const like = card.querySelector('.elements__like');
    like.addEventListener('click', toggleLike);
    const deleteButton = card.querySelector('.elements__delete');
    deleteButton.addEventListener('click', removeCardsItem);
};

// создание карточки: копируем темплейт карточки, возвращаем данные из массива, добавляем карточки в ul
const createCard = ({name, link}) => {
    const card = template.content.cloneNode(true); //клонируем шаблон карточки
    const cardPhoto = card.querySelector('.elements__photo');//находим фото карточки в DOM
    const cardTitle = card.querySelector('.elements__name');//находим название карточки в DOM
    cardTitle.innerText = name;
    cardPhoto.alt = name;
    cardPhoto.src = link;
    createCardListeners(card);
    return card; // возвращаем карточку с атрибутами элементов, обозначенными выше
}

const renderInitialCards = () => { //вызвали функцию создания карточки
    initialCards.forEach(({name, link}) => { //для каждого элемента массива:
        const card = createCard({name, link}); //передали карточке значения name и link
        cards.appendChild(card); // добавили карточки в ul
    })
}

renderInitialCards();

//ОБЩИЕ ФУНКЦИИ ДЛЯ ВСЕХ ПОПАПОВ

//открытие:
const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', closePopupByKey);//добавляем слушатель для закрытия попапа с esc
}

//закрытие:
const closePopup = (popup, event) => {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupByKey);//снимаем слушатель для закрытия с esc при закрытии попапа
}

//ПОПАП ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ

// открываем попап:
const openEditPopup = () => {
    loadUserData();       //подгружаем текущие значения в профиле
    resetErrorInput(editPopupSaveButton); // сбрасываем ошибки инпутов при предыдущем открытии попапа;
    openPopup(editPopup);// открываем попап

}

// закрываем попап:
const closeEditPopup = (event) => {
    closePopup(editPopup, event);
}

// подгружаем текущие данные профиля в соответствующие инпуты попапа:
const loadUserData = () => {
    userNameInput.value = profileName.textContent;
    userInfoInput.value = profileInfo.textContent;
}

// передаем введенные в инпуты данные профиля:
const saveUserData = () => {
    profileName.textContent = userNameInput.value;
    profileInfo.textContent = userInfoInput.value;
}

// при нажатии на "сохранить" вызываем функции для сохранения данных из инпута и закрытия попапа:
const submitEditForm = (event) => {
    saveUserData()
    closeEditPopup(event);
}

//ПОПАП ДЛЯ ДОБАВЛЕНИЯ НОВЫХ КАРТОЧЕК

// открываем попап:
const openAddPopup = () => {
    addPopupSaveButton.reset(); //сбрасываем значения, которые могли быть введены перед закрытием попапа без сохранения при предыдущем открытии
    resetErrorInput(addPopupSaveButton); // сбрасываем ошибки инпутов при предыдущем открытии попапа;
    openPopup(addPopup);       // открываем попап
}

// закрываем попап:
const closeAddPopup = (event) =>{
    closePopup(addPopup, event);
}

// добавление карточки:
const addCard = (name, link) => {
    const card = createCard({name, link});
    cards.prepend(card);
}

// при нажатии на "создать" передаем значения из инпутов в массив для создания новой карточки:
const submitAddForm = (event) => {
    addCard(cardNameInput.value, cardLinkInput.value);
    closeAddPopup(event)
}

//ЗАКРЫТИЕ ПОПАПОВ ПРИ КЛИКЕ НА ОВЕРЛЕЙ ИЛИ НАЖАТИЕМ ESC
//ESC
const closePopupByKey = (event) => {
    const popup = document.querySelector('.popup_is-opened'); //находим открытый попап
    if (event.key === 'Escape') {                                     //если событие происходит с нажатием escape
        closePopup(popup, event)                                     //вызываем ф-ю закрытия попапа
    }
}
//Overlay
const closePopupByOverlay = (event) => {
    const popup = document.querySelector('.popup_is-opened');//находим открытый попап
    if (event.target === event.currentTarget) {                      //если событие(клик) происходит в попапе(оверлей это попап в разметке)
        closePopup(popup, event);                                   //вызываем ф-ю закрытия попапа
    }
};

//очистка ошибок при повторном открытии попапа:

const resetErrorInput = (formElement) => {
    const buttonElement = formElement.querySelector('.popup__btn')  //находим кнопку
    const inputData = formElement.querySelectorAll('.popup__item') //находим все инпуты внутри формы
    const inputList = Array.from(inputData);                               //делаем из них массив

    inputList.forEach((inputElement) => {                                 //для каждого инпута из массива
        hideInputError(formElement, inputElement, inputData);            //скрываем ошибку инпута
    });

    toggleButtonState(inputList, buttonElement);                       //переключаем кнопку в корректное состояние
}


//СЛУШАТЕЛИ СОБЫТИЙ

//попап для добавления новой карточки:
addPopupOpenButton.addEventListener('click', openAddPopup);     //открытие
addPopupCloseButton.addEventListener('click', closeAddPopup);  //закрытие по клику на крестик
addPopupSaveButton.addEventListener('submit', submitAddForm); //сабмит формы

//попап для редактирования профиля:
editPopupOpenButton.addEventListener('click', openEditPopup);    //открытие
editPopupCloseButton.addEventListener('click', closeEditPopup); //закрытие по клику на крестик
editPopupSaveButton.addEventListener('submit', submitEditForm);//сабмит формы

//закрытие попапов:
editPopup.addEventListener('mousedown', closePopupByOverlay); // закрытие попапа для редактирования профиля по клику на оверлей;
addPopup.addEventListener('mousedown', closePopupByOverlay); // закрытие попапа для добавления карточек по клику на оверлей;
galleryPopup.addEventListener('mousedown', closePopupByOverlay); // закрытие попапа для просмотра фото по клику на оверлей;
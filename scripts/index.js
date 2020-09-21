const template = document.querySelector('.template__card');
const cards = document.querySelector('.elements__list');
//попап для просмотра фото:
const galleryPopup = document.querySelector('.popup_gallery');
const galleryPopupPhoto = galleryPopup.querySelector('.popup__photo');
const galleryPopupCaption = galleryPopup.querySelector('.popup__caption');
//попап для редактирования профиля:
const editPopup = document.querySelector('.popup_edit');
const editPopupOpenButton = document.querySelector('.profile__edit-btn');
const editPopupCloseButton = editPopup.querySelector('.popup__close');
const editPopupSaveButton = editPopup.querySelector('.popup__form_edit');
const userNameInput = document.querySelector('.popup__item_type_name');
const userInfoInput = document.querySelector('.popup__item_type_info');
const profileName = document.querySelector('.profile__username');
const profileInfo = document.querySelector('.profile__userinfo');
//попап для добавления новых карточек:
const addPopup = document.querySelector('.popup_add');
const addPopupOpenButton = document.querySelector('.profile__add-btn');
const addPopupCloseButton = addPopup.querySelector('.popup__close');
const addPopupSaveButton = addPopup.querySelector('.popup__form_add');
const cardNameInput = document.querySelector('.popup__item_type_place');
const cardLinkInput = document.querySelector('.popup__item_type_link');

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
    //открыть попап для просмотра фото:
    const cardImage = card.querySelector('.elements__photo')
    cardImage.addEventListener('click', openGalleryPopup);
    //закрыть попап:
    galleryPopup.querySelector('.popup__close').addEventListener('click', closeGalleryPopup);
    //лайк:
    const like = card.querySelector('.elements__like');
    like.addEventListener('click', toggleLike);
    // удаление карточки:
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

const render = () => { //вызвали функцию создания карточки
    initialCards.forEach(({name, link}) => { //для каждого элемента массива:
        const card = createCard({name, link}); //передали карточке значения name и link
        cards.appendChild(card); // добавили карточки в ul
    })
}

render();

//ОБЩИЕ ФУНКЦИИ ДЛЯ ВСЕХ ПОПАПОВ

//открытие:
const openPopup = (popup) => {
    popup.classList.add('popup_is-opened');
}

//закрытие:
const closePopup = (popup, event) => {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
}

//ПОПАП ДЛЯ РЕДАКТИРОВАНИЯ ПРОФИЛЯ

// открываем попап:
const openEditPopup = () => {
    loadUserData();
    openPopup(editPopup);
}

// закрываем попап:
const closeEditPopup = (event) =>{
    closePopup(editPopup, event)
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
const submitEditForm = (event) => {
    saveUserData()
    closeEditPopup(event);
}

//ПОПАП ДЛЯ ДОБАВЛЕНИЯ НОВЫХ КАРТОЧЕК

// открываем попап:
const openAddPopup = () => {
    addPopupSaveButton.reset();
    openPopup(addPopup);
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

//СЛУШАТЕЛИ СОБЫТИЙ

//попап для добавления новой карточки:
addPopupOpenButton.addEventListener('click', openAddPopup); //открытие
addPopupCloseButton.addEventListener('click', closeAddPopup); //закрытие по клику на крестик
addPopupSaveButton.addEventListener('submit', submitAddForm); //сабмит формы

//попап для редактирования профиля:
editPopupOpenButton.addEventListener('click', openEditPopup); //открытие
editPopupCloseButton.addEventListener('click', closeEditPopup); //закрытие по клику на крестик
editPopupSaveButton.addEventListener('submit', submitEditForm); //сабмит формы


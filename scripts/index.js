const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit-btn');
const popupCloseButton = document.querySelector('.popup__close');
const popupSaveButton = document.querySelector('.popup__form');
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

popupOpenButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
popupSaveButton.addEventListener('submit', formSubmit);



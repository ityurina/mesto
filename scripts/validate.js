const validationConfig = ({
    formElement: '.popup__form',
    inputElement: '.popup__item',
    buttonElement: '.popup__btn',
    inactiveButtonClass: 'popup__btn_inactive',
    inputErrorClass: 'popup__item_type_err',
    errorClass: 'popup__input-error_active'
});

//ФУНКЦИИ ПОКАЗА ОШИБКИ ИНПУТА

//ф-я показа ошибки инпута
const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); // находим span под соответствующим инпутом
    errorElement.textContent = errorMessage;                  // помещаем в него текст ошибки
    errorElement.classList.add('popup__input-error_active'); // делаем текст ошибки видимым путем назначения класса со стилями
    inputElement.classList.add('popup__item_type_err');     // добавляем красный аутлайн
}
//ФУНКЦИИ СКРЫТИЯ ОШИБКИ ИНПУТА

//скрываем ошибку инпута
const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);//находим span под соответствующим инпутом
    errorElement.textContent = ''; //делаем его пустым
    errorElement.classList.remove('popup__input-error_active'); //скрываем span
    inputElement.classList.remove('popup__item_type_err');     //убираем красный аутлайн
}

//ПРОВЕРКА НА ВАЛИДНОСТЬ, ПОКАЗ ИЛИ СКРЫТИЕ ОШИБКИ, (ДЕЗ)АКТИВАЦИЯ КНОПКИ ОТПРАВКИ ФОРМЫ

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;

    if (isInputNotValid) {                                         //если введенные данные не валидны,
        const errorMessage = inputElement.validationMessage;
        showInputError(formElement, inputElement, errorMessage); // показываем текст ошибки,
    } else {                                                   // в остальных случаях(все ок)
        hideInputError(formElement, inputElement);            // скрываем текст ошибки,
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid);
};

const toggleButtonState = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add('popup__btn_inactive');
        buttonElement.setAttribute('disabled', true);
    } else {
        buttonElement.classList.remove('popup__btn_inactive');
        buttonElement.removeAttribute('disabled');
    }
};

//устанавливаем обработчики событий для инпутов
const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__item'));// ищем все инпуты в форме, создаем массив
    const buttonElement = formElement.querySelector('.popup__btn');// ищем кнопку отправки в форме

    inputList.forEach((inputElement) => {                   // для всех инпутов:
        inputElement.addEventListener('input', () => {     // проверяем валидность введенных данных
            checkInputValidity(formElement, inputElement);// запускаем или не запускаем показ текста ошибки и подсветку инпута с ошибкой
            toggleButtonState(inputList, buttonElement); // делаем кнопку отправки формы активной или нет
        })
    })

    toggleButtonState(inputList, buttonElement);
}

//Объединяем все объявленные выше ф-ии в последовательность итераций и вызываем их:
const enableValidation = () => {
    const formElements = document.querySelectorAll('.popup__form') //находим все формы на странице;
    const formList = Array.from(formElements);                             // делаем из них массив;
    const formListIterator = (formElement) => {                           //объявляем ф-ю с последовательностью итераций для каждой формы;
        const submitFormHandler = (event) => {                           //отменяем событие по умолчанию;
            event.preventDefault();
        };
        formElement.addEventListener('submit', submitFormHandler);    //создаем слушатели событий для каждой формы, отменяющие отправку формы по умолчанию;
        setEventListeners(formElement);                              //вызываем ф-ю со слушателями с-й для запуска проверки инпутов на валидность и показа(скрытия)ошибок;
    };
    formList.forEach(formListIterator);                            //для всех форм вызываем ф-ю с последовательностью итераций по проверке на валидность инпутов;
};

enableValidation(validationConfig);

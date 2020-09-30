# Проект 5: Место

### Обзор

* Интро
* Figma
* GitHub Pages

**Интро**

*  Реализован проект для публикации фото из путешествий с возможностью редактирования профиля.

Для построения сеток используются flex и grid layout.

Страница адаптирована под устройства с различной шириной экрана.

Пользователь может изменять данные профиля через попап. При открытии попапа в инпут передаются текущие значения профиля.

Реализована возможность добавлять новые карточки на страницу через ввод данных в попап. При сабмите формы создается новая карточка и методом prepend() помещается в начало списка.

Пользователь также может переключать лайки (активное и неактивное состояние переключается через toggle()) и удалять карточки  нажатием на соответствующую кнопку(удаление происходит методом remove(), а нужная карточка выбирается  через event.target.closest() как ближайшая карточка к событию).

При нажатии на картинку открывается попап для просмотра фото в увеличенном размере.

Все попапы на странице открываются с fade-in эффектом, реализованным через CSS свойства.

Реализована валидация форм попапов.

Попапы закрываются нажатием на Escape и оверлей.

**Figma**

* [Ссылка на макет в Figma](https://www.figma.com/file/nlYpT4VhFiwimn2YlncrcF/JavaScript.-Sprint-5)

**GitHub Pages**

Ссылка на проект: 
https://ityurina.github.io/mesto/
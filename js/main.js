let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
  //отменяем стандартное поведение ссылки при клике
  event.preventDefault();
  //вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle('visible');
});

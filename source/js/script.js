// Слайдер в шапке
var image = document.querySelector('.header__img');
var range = document.querySelector('#range');
var coordX = range.value;

range.addEventListener('input', function () {
  image.style.transform = 'translateX(-' + range.value + 'px)';
})

// Кастомный селект
var selected = document.querySelector('.form__input--option');
var optionsContainer = document.querySelector('.form__select-container');
var optionsList = document.querySelectorAll('.form__select-item');

selected.addEventListener('click', function () {
  optionsContainer.classList.toggle('form__select-container--active');
})

optionsList.forEach(function (item) {
  item.addEventListener('click', function () {
    selected.value = item.querySelector('label').innerHTML;
    optionsContainer.classList.remove('form__select-container--active');
  })
})

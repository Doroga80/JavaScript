"use strict";


  /**Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером. */

  document.addEventListener('DOMContentLoaded', function() {
    console.log('все теги прогрузились');
  });

/**Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены */

window.addEventListener('load', () => {
    console.log('Страница загрузилась');
  });

  /**При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование. */

document.addEventListener('click', (event) => {
    const element = event.target;
    const className = 'super_element';
    
    if (element.classList.contains(className)) {
      console.log(`Класс ${className} присутствует в элементе ${element.tagName.toLowerCase()}.`);
    } else {
      console.log(`Класс ${className} отсутствует в элементе ${element.tagName.toLowerCase()}.`);
    }
  });

  /**Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea." */

  document.addEventListener('mouseover', (event) => {
    const element = event.target;
    
    if (element.tagName.toLowerCase() === 'textarea') {
      console.log('Вы навели на textarea.');
    }
  });

  /**Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование. */

  document.querySelector('ul').addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'button') {
      console.log(event.target.textContent);
    }
  });

  // Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

  // Это происходит из-за того, что обработчик события click использует делегирование для отслеживания кликов на кнопках внутри элемента ul. При клике на кнопку, сначала будет выполнен код из обработчика события click, который выводит текст из 5 задания в консоль. Затем будет выполнен код из обработчика события click, который выводит текст из 3 задания в консоль. Таким образом, сначала будет выведен текст из 5 задания, а потом текст из 3 задания.

  /**С помощью JS необходимо изменить цвет заднего фона каждого второго тега li. */

  var liElements = document.querySelectorAll('ul li:nth-child(even)');
liElements.forEach(function(li) {
  li.style.backgroundColor = 'lightgrey';
});

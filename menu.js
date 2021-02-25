// ||| SUB-MENU  |||
const sub_menu = document.querySelector('li.sub-menu a');
const sub_menu_active = document.querySelector('ul.sub-menu-itens');
const drawer_sub_menu = document.querySelector('span.drawer-sub-menu');
const menu = document.querySelector('.menu');

const humburguer = document.querySelector('span.hamburguer');


sub_menu.addEventListener('click', () => {
    sub_menu_active.classList.toggle('sub-menu-active');
    drawer_sub_menu.classList.toggle('drawer-dropdown-sub-menu')
})

humburguer.addEventListener('click', () => {
    humburguer.classList.toggle('teste')
    menu.classList.toggle('menu-active');
    document.querySelector('.modal')
      .classList.toggle('modal-active')
})

document.querySelector('.modal').addEventListener('click', () => {
  document.querySelector('.modal')
      .classList.toggle('modal-active')
      humburguer.classList.toggle('teste')
    menu.classList.toggle('menu-active');
})





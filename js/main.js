const snbBtn = document.querySelector('#snb .btn_menu');
const subMenu = document.querySelector('#snb .sub_menu');
snbBtn.addEventListener('click', () => {
  if (subMenu.classList.contains('hide')) {
    return subMenu.classList.remove('hide');
  }
  subMenu.classList.add('hide');
});

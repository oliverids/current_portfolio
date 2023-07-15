const menu_button = document.getElementById('menu'),
  header = document.querySelector('header');

menu_button.addEventListener('click', () => {
  header.classList.toggle('ativo');
})

let topo;
window.addEventListener('scroll', e => {
  window.scrollY !== 0 ? header.classList.add('scroll') : header.classList.remove('scroll');

  // topo = document.querySelector('#projetos').getBoundingClientRect().top;
  // topo < -400 ? backTop.classList.add('show') : backTop.classList.remove('show');
});
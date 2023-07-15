const menu_button = document.getElementById('menu'),
  header = document.querySelector('header'),
  internal_links = document.querySelectorAll('#internal_nav a');

menu_button.addEventListener('click', () => {
  header.classList.toggle('ativo');
})

internal_links.forEach(each => {
  each.addEventListener('click', e => {
    e.preventDefault();

    const href = event.currentTarget.getAttribute('href'),
      section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    header.classList.remove('ativo')
  })
})

let topo;
window.addEventListener('scroll', e => {
  window.scrollY !== 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
});
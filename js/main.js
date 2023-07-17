const menu_button = document.getElementById('menu'),
  header = document.querySelector('header'),
  nav = document.getElementById('nav'),
  internal_links = document.querySelectorAll('#internal_nav a');

menu_button.addEventListener('click', () => {
  header.classList.toggle('ativo');
})

window.onclick = e => {
  if (
    header.classList.contains('ativo') &&
    !e.target.matches('#nav') &&
    !e.target.matches('#header') &&
    !e.target.matches('#header .container') &&
    !e.target.matches('#menu') &&
    !e.target.matches('#menu div')
  ) {
    header.classList.remove('ativo')
  }
};

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

window.addEventListener('scroll', e => {
  window.scrollY !== 0 ? header.classList.add('scroll') : header.classList.remove('scroll');
});


const copyEmail = document.getElementById('email');
copyEmail.addEventListener('click', () => {
    navigator.clipboard.writeText('isabela@webicos.com');
    copyEmail.classList.add('ativo')
    setTimeout(() => copyEmail.classList.remove('ativo'), 1000);
});
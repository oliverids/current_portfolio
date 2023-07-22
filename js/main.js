const menuButton = document.getElementById('menu'),
  header = document.querySelector('header'),
  nav = document.getElementById('nav'),
  internalLinks = document.querySelectorAll('#internal_nav a', '#logo');

menuButton.addEventListener('click', () => {
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

internalLinks.forEach(each => {
  each.addEventListener('click', e => {
    e.preventDefault();

    const href = event.currentTarget.getAttribute('href'),
      section = document.querySelector(href);

    window.scrollTo({
      top: section.offsetTop - 100,
      behavior: 'smooth'
    });

    console.log(section.getBoundingClientRect().top - 100)

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
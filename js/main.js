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


const copy_email = document.getElementById('email');
copy_email.addEventListener('click', () => {
  navigator.clipboard.writeText('isabela@webicos.com');
  copy_email.classList.add('ativo')
  setTimeout(() => copy_email.classList.remove('ativo'), 1000);
});

//BAFFLE JS
function scrolled_into_view(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

const baffle_titles = document.querySelectorAll('.section h2, footer h2');
let a = baffle('.h1_baffle').start();
a.reveal(1300)

window.onscroll = e => {
  baffle_titles.forEach(title => {
    if (scrolled_into_view(title) && !title.classList.contains('baffle')) {
      title.classList.add('baffle')
      let b = baffle(title).start();
      b.reveal(1000)
      return false;
    }
  })
}
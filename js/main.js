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
    !e.target.matches('#menu') &&
    !e.target.matches('#menu div') &&
    !e.target.matches('.nav_1280')
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

//CUSTOM CURSOR
// let cursor = document.getElementById('cursor'),
//   cursor2 = document.getElementById('cursor2');

//   let cursorLinks = document.querySelectorAll('a, button'),
//   cursorSections = document.querySelectorAll('#main_experiencias, marquee, footer');

// document.addEventListener('mousemove', e => {
//   cursor.style.cssText = cursor2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px;`;
// })

// cursorLinks.forEach(each => {
//   each.addEventListener('mouseenter', e => {
//     cursor.classList.add('hover-link')
//     cursor2.classList.add('hover-link')
//   })

//   each.addEventListener('mouseleave', e => {
//     cursor.classList.remove('hover-link')
//     cursor2.classList.remove('hover-link')
//   })
// })

// cursorSections.forEach(each => {
//   each.addEventListener('mouseenter', e => {
//     cursor.classList.add('hover-section')
//     cursor2.classList.add('hover-section')
//   })

//   each.addEventListener('mouseleave', e => {
//     cursor.classList.remove('hover-section')
//     cursor2.classList.remove('hover-section')
//   })
// })

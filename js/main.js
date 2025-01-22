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

// VALIDAÇÃO FORMULÁRIO
document.querySelector('.contatos_form').addEventListener('submit', function (event) {
  const honeypot = document.getElementById('honeypot').value;
  if (honeypot) {
    event.preventDefault(); // Impede envio se o campo oculto estiver preenchido
    alert('Envio bloqueado devido a comportamento suspeito.');
  }
});

window.onload = function () {
  document.getElementById('btn_submit').disabled = false;
};

window.onload = function () {
  setTimeout(() => {
    document.getElementById('btn_submit').disabled = false;
  }, 1000); // Habilita após 3 segundos
};

document.querySelector('.contatos_form').addEventListener('submit', function (event) {
  const email = document.getElementById('input_email').value;
  if (!email.includes('@')) {
    event.preventDefault(); // Impede envio se o email for inválido
    alert('Por favor, insira um e-mail válido.');
  }
});
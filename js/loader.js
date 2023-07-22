loader();

function loader(_success) {
  let inner = document.getElementById('preloader_inner'),
    loaderDiv = document.getElementById('loader');

  let w = 0,
    t = setInterval(function () {
      w = w + 5;
      inner.textContent = w + '%';
      if (w === 100) {
        setTimeout(() => {
          loaderDiv.classList.add('hide');
        }, 400);
        clearInterval(t);
        w = 0;
        if (_success) {
          return _success();
        }
      }
    }, 100);
}

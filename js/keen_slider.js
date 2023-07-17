//EXPERIENCIAS COMPARTILHADAS
var slider1 = new KeenSlider("#experiencias_slider", {
  mode: "free-snap",
  slides: {
    origin: "center",
    perView: 3,
    spacing: 44
  },
})

//SOBRE MIM
var slider2 = new KeenSlider("#sobre_slider", {
  mode: "free-snap",
  slides: {
    origin: "center",
    perView: 1,
    spacing: 20,
  },
})

//INFINITE SCROLL BANNER
// var animation = { duration: 10000, easing: (t) => t }

// var slider3 = new KeenSlider("#infinite_slider", {
//   loop: true,
//   renderMode: "performance",
//   drag: false,
//   created(s) {
//     s.moveToIdx(5, true, animation)
//   },
//   updated(s) {
//     s.moveToIdx(s.track.details.abs + 5, true, animation)
//   },
//   animationEnded(s) {
//     s.moveToIdx(s.track.details.abs + 5, true, animation)
//   },
// })

//CASES
function navigation(slider) {
  let wrapper, dots, arrowLeft, arrowRight

  function markup(remove) {
    wrapperMarkup(remove)
    // dotMarkup(remove)
    arrowMarkup(remove)
  }

  function removeElement(elment) {
    elment.parentNode.removeChild(elment)
  }
  function createDiv(className, button) {
    var div;
    if (button !== 'button') {
      div = document.createElement("div")
    } else {
      div = document.createElement("button")
    }
    // var div = document.createElement("div")
    var classNames = className.split(" ")
    classNames.forEach((name) => div.classList.add(name))
    return div
  }

  let counter = createDiv("counter"),
  span = document.createElement('span');
  span.innerText = `1/${document.getElementById('my-keen-slider').childElementCount}`;
  counter.appendChild(span);

  function arrowMarkup(remove) {
    let arrowNavigation = createDiv("arrow_nav");


    if (remove) {
      removeElement(arrowLeft)
      removeElement(arrowRight)
      return
    }
    arrowLeft = createDiv("arrow arrow--left", "button")
    arrowLeft.addEventListener("click", () => slider.prev())
    arrowRight = createDiv("arrow arrow--right", "button")
    arrowRight.addEventListener("click", () => slider.next())

    arrowNavigation.appendChild(arrowLeft)
    arrowNavigation.appendChild(counter)
    arrowNavigation.appendChild(arrowRight)
    wrapper.appendChild(arrowNavigation)
  }

  function wrapperMarkup(remove) {
    if (remove) {
      var parent = wrapper.parentNode
      while (wrapper.firstChild)
        parent.insertBefore(wrapper.firstChild, wrapper)
      removeElement(wrapper)
      return
    }
    wrapper = createDiv("navigation-wrapper")
    slider.container.parentNode.appendChild(wrapper)
    wrapper.appendChild(slider.container)
  }

  // function dotMarkup(remove) {
  //   if (remove) {
  //     removeElement(dots)
  //     return
  //   }
  //   dots = createDiv("dots")
  //   slider.track.details.slides.forEach((_e, idx) => {
  //     var dot = createDiv("dot")
  //     dot.addEventListener("click", () => slider.moveToIdx(idx))
  //     dots.appendChild(dot)
  //   })
  //   wrapper.appendChild(dots)
  // }

  function updateClasses() {
    var slide = slider.track.details.rel
    slide === 0
      ? arrowLeft.classList.add("arrow--disabled")
      : arrowLeft.classList.remove("arrow--disabled")
    slide === slider.track.details.slides.length - 1
      ? arrowRight.classList.add("arrow--disabled")
      : arrowRight.classList.remove("arrow--disabled")
    // Array.from(dots.children).forEach(function (dot, idx) {
    //   idx === slide
    //     ? dot.classList.add("dot--active")
    //     : dot.classList.remove("dot--active")
    // })

    span.innerText = `${slide + 1}/${slider.track.details.length +1}`;
  }

  slider.on("created", () => {
    markup()
    updateClasses()
  })
  slider.on("optionsChanged", () => {
    console.log(2)
    markup(true)
    markup()
    updateClasses()
  })
  slider.on("slideChanged", () => {
    updateClasses()
  })
  slider.on("destroyed", () => {
    markup(true)
  })
}

var slider4 = new KeenSlider("#my-keen-slider", {}, [navigation])



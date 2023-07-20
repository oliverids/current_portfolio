let screen_width = window.innerWidth;

//DISABLING KEEN SLIDER FOR SCREEN WIDER THAN 1024PX
if(screen_width > 1023) {
  document.querySelectorAll('.disable-1024').forEach(each => {
    each.classList.remove('keen-slider')
    each.querySelectorAll('.keen-slider__slide').forEach(each => {
      each.classList.remove('keen-slider__slide')

    })
  })
}

console.log(screen_width)

//EXPERIENCIAS COMPARTILHADAS
let main_experiencias_slider = new KeenSlider("#experiencias_slider", {
  slides: {
    origin: "center",
    perView: screen_width < 576 ? 2.2 : 2.5,
    spacing: 60
  },
})


let sobre_slider = new KeenSlider("#sobre_slider", {
  slides: {
    perView: screen_width < 576 ? 1.2 : screen_width < 768 ? 1.5 : 1.7,
    spacing: 30
  },
})


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
  span.innerText = `1/${slider.slides.length}`;
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

    if(screen_width >= 768 && slide +1 == slider.track.details.slides.length - 1) {
      arrowRight.classList.add("arrow--disabled")
    } else {
      arrowRight.classList.remove("arrow--disabled")
    }

    span.innerText = `${slide + 1}/${screen_width < 768 ? slider.slides.length : slider.slides.length - 1}`;
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

let cases_slider = new KeenSlider("#my-keen-slider", {
  slides: {
    perView: screen_width < 768 ? 1 : 2,
    spacing: 56
  },
}, [navigation])






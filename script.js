const loading = document.querySelector('.loading-screen');
const html = document.querySelector('html');
const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const logoImgCon = document.querySelector('.logo-img-con');
const headerCta = document.querySelector('.header-cta');
const navItem = document.querySelectorAll('.nav-item');
const typeCon = document.querySelector('.typing');
const blinker = document.querySelector('.blinker');
const sectionHeaders = document.querySelectorAll('.section-text h2');
const sectionTexts = document.querySelectorAll('.section-text p');
const portfolioPics = document.querySelectorAll('.portfolio-grid-img');
const faq = document.querySelectorAll('.faqNa');
const faqIcon = document.querySelectorAll('.faq-icon');



function showAnswer(element) {
    const isOpen = element.getAttribute('isOpen');
    const faq = element.closest('.faqNa')
    if(element.classList.contains("first-icon")) element.classList.remove("first-icon")

    if (isOpen === '0') {
        element.style.rotate = '225deg'
        faq.style.maxHeight = '500px'
    } else {
        element.style.rotate = '0deg'
        faq.style.maxHeight = '50px'
    }
    element.setAttribute('isOpen', isOpen === "1" ? "0" : "1");
}
function initWebpage() {
    loading.style.display = 'none'
    html.style.overflow = 'inherit'
    setTimeout(typing, 500)
    blinker.style.animationName = 'blinking'

    headerAnimations()
}
function headerAnimations() {
    let defDependencies = [logo, logoImgCon, headerCta]
    defDependencies.forEach(element => element.classList.add('def'))

    let startDelay = 0
    navItem.forEach(item => {
        item.style.animationDelay = `${startDelay}s`
        startDelay += 0.15
        item.style.animationName = 'nav-anim'
    })

    blinker.style.animationName = 'blinking'

}
let currentTypingLocation = 0
function typing() {
    const typingQuote = 'Lens & Life: ! Where ! Every Click ! Counts'
    const typingArray = typingQuote.split('')
    const time = 90 + (Math.random() * 20)

    if (currentTypingLocation === typingArray.length) {
        console.log("done")
        return
    }
    const value = typingArray[currentTypingLocation]
    if (value === '!') {
        typeCon.innerHTML += '<br>'
        currentTypingLocation++
        setTimeout(typing, time)
    } else {
        typeCon.innerHTML += value
        currentTypingLocation++
        setTimeout(typing, time)
    }

}

const defObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(
        entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('def')
                observer.unobserve(entry.target)
            }
        }
    )
}, {
    threshold: 0.8
})

defArrays = [sectionHeaders, sectionTexts, portfolioPics, faq, faqIcon]
defArrays.forEach(array => {
    array.forEach(el => {
        defObserver.observe(el)
    })
})


window.onload = () => {
    setTimeout(initWebpage, 500)
} 
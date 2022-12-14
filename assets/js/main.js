    const menuBtn = document.querySelector('.menu')
    const navigation = document.querySelector('.nav__list')
    const navigationItems = document.querySelectorAll('.nav__item')


    menuBtn.addEventListener('click', () => {
        navigation.classList.toggle('active')
        menuBtn.classList.toggle('openmenu')

    })

    navigationItems.forEach(navItem => {
        navItem.addEventListener('click', () => {
            navigation.classList.remove('active') 
            menuBtn.classList.remove('openmenu')
        })
    })

    function scrollHeader() {
        const header = document.getElementById('header')
        if(this.scrollY >= 50) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
    }
    window.addEventListener('scroll', scrollHeader)

    let swiperPopular = new Swiper(".popular__container", {
        loop: true,
        spaceBetween:24,
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        }, 
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1024: {
                spaceBetween:48,
            }
        }
    });

    let mixerFeatured = mixitup('.featured__content', {
        selectors: {
            target: '.featured__card'
        },
        animation: {
            duration: 300
        }
    });

    const linkFeatured = document.querySelectorAll('.featured__item')
    function activeFeatured() {
        linkFeatured.forEach(i=> i.classList.remove('active-featured'))
        this.classList.add('active-featured')
    }
    linkFeatured.forEach(i=> i.addEventListener('click', activeFeatured ))
    
    function scrollUp () {
        const  scrollUp = document.getElementById('scroll-up');
        if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)
    

    const sections = document.querySelectorAll('section[id]')

    function scrollActive() {
        const scrollY = window.pageYOffset

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight,
                  sectionTop = current.offsetTop - 58,
                  sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.add('active-link')
            }else {
                document.querySelector('.nav__list a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
    }
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal( {
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.home__button`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal(`.about__group, .offter__data`, { origin: 'left'})
sr.reveal(`.about__data, .offter__img`, { origin: 'right'})
sr.reveal(`.features__map`, {delay: 600, origin: 'bottom'})
sr.reveal(`.features__card`, {interval: 300})
sr.reveal(`.featured__card, .logos__content , .footer__content`, {interval: 100})

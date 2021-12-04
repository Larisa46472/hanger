const linkDown = document.querySelector('.link--down')
const secondSection= document.querySelector('.section--about_us')



const trackScroll = () => {
    let scrolled = window.pageYOffset

    window.scrollBy(0, secondSection.offsetTop)
    
}


linkDown.addEventListener('click', (e) => {
    e.preventDefault()
    trackScroll()
})

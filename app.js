const toggleOpen = document.querySelector(".toggle-open")
const toggleClose = document.querySelector(".toggle-close")
const aside = document.querySelector(".aside")
const article = document.querySelectorAll('.article')
const home = document.getElementById('home')
const about = document.getElementById('about')
const projects = document.getElementById('projects')
const contact = document.getElementById('contact')
const navlink = document.querySelectorAll('.all-link')
const navItem = document.querySelectorAll('.nav-item')

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

const date = new Date()


document.getElementById('date').textContent = `${date.getFullYear()}`

toggleOpen.addEventListener('click', function(){
    aside.classList.add('show-aside')
})

toggleClose.addEventListener('click', function(){
    aside.classList.remove('show-aside')
})



window.onscroll = function(){
    if(window.pageYOffset > 80){
        document.querySelector('.navbar').style.background = '#D8C3A5'
    } else {
        document.querySelector('.navbar').style.background = '#EAE7DC'
    }
}





navlink.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()
        console.log(e.currentTarget.textContent)
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id);
        let position = element.offsetTop
        window.scrollTo({
            left: 0,
            top: position - 80,
        })
        aside.classList.remove('show-aside')
    })
})








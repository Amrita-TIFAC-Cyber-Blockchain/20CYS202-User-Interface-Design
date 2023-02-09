
document.addEventListener('DOMContentLoaded',function(){

    const nav = document.querySelector('.navbar')
    const allNavItems = document.querySelectorAll('.nav-link')
    const navList = document.querySelector('.navbar-collapse')
    const btn = document.querySelector('.navbar-toggler')

    function addShadow(){
        if (window.scrollY>=50) {
            nav.classList.add('nav-bg')
        }
        else if(window.scrollY==0){
            nav.classList.remove('nav-bg')
        }

    }
    function addShadowClick (){
        nav.classList.add('nav-bg')
    }

    allNavItems.forEach(item => item.addEventListener('click',()=> navList.classList.remove('show')))
    btn.addEventListener('click', addShadowClick)

    window.addEventListener('scroll', addShadow)

})
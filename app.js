function toggleMenu(){
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active')
    document.querySelector('.toggle-menu').classList.toggle('active')
    document.querySelector('.menu-overlay').classList.toggle('active');
}
document.addEventListener('scroll', function(){
   if(window.scrollY > 0){
       document.querySelector('.toggle-menu').classList.add('fixed')
    }
    else{
       document.querySelector('.toggle-menu').classList.remove('fixed')
   }
})
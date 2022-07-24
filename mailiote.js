const btnMobile = document.getElementById('btn-mobile');
function toggleMenu()
{
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click', toggleMenu); 
class MobileNavbar


 {
  constructor(mobileMenu, navList, navLinks) 
  {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade .5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
} 

const mobileNavbar = new MobileNavbar(
  "#btn-mobile",
  "#menu",
  "#menu li",
);
mobileNavbar.init();



document.querySelectorAll('.image-container img').forEach(image=>{
  image.onclick = () =>{
document.querySelector('.popup-image').style.display = 'block';
document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});
document.querySelector('.popup-image span ').onclick = () =>{ /*essa é o X pra fechar **/
document.querySelector('.popup-image ').style.display = 'none';/*esse resultado da acao do click no X*/



};
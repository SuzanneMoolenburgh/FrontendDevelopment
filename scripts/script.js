/*********************/
/*   HEADER SCROLL   */
/*********************/

/*Bronnen:
- https://stackoverflow.com/questions/19158559/how-to-fix-a-header-on-scroll
- https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
*/

const header = document.querySelector("header");

function headerScroll() {
    if (window.scrollY > 1) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

window.addEventListener('scroll', headerScroll);





/******************************/
/*   FOTO CARROUSEL COUNTER   */
/******************************/

/*Bron:
- https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll
- https://stackoverflow.com/questions/51219064/run-function-only-on-index-html-page-javascript
*/

if (window.location.pathname === '/listing.html') {
  const carrousel = document.querySelector('main > section:nth-of-type(1) div ul');
  const fotos = carrousel.querySelectorAll('li');
  const counter = document.querySelector('main > section:nth-of-type(1) div output');

  const fotoWidth = fotos[0].offsetWidth;

  function updateCounter() {  
    const huidigePositie = Math.round(carrousel.scrollLeft / fotoWidth);
    counter.textContent = (huidigePositie + 1) + " / 7";
  }

  carrousel.addEventListener('scroll', updateCounter);
}




/*********************/
/*   STICKY FOOTER   */
/*********************/

let oudePositie = window.scrollY;
const footer = document.querySelector("footer > section:last-of-type");

function footerToggle() {
  const nieuwePositie = window.scrollY;

  if (nieuwePositie > oudePositie) {
    footer.classList.add("verborgen");
  } else {
    footer.classList.remove("verborgen");
  }

  oudePositie = nieuwePositie;
};

window.addEventListener("scroll", footerToggle);
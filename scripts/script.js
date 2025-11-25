/*********************/
/*  CAROUSEL KNOPPEN */
/*********************/

/*Bronnen:
- https://fa.javascript.info/size-and-scroll
- https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
- https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
*/

document.querySelectorAll("main section").forEach(function(section) {
    const carousel = section.querySelector("ul");
    const buttons = section.querySelectorAll("div button");
    
    const advertentie = carousel.querySelector("a").offsetWidth;

    function terug() {
        carousel.scrollBy({
            left: -2 * advertentie,
            behavior: "smooth"
        });
    }

    function volgende() {
        carousel.scrollBy({
            left: 2 * advertentie,
            behavior: "smooth"
        });
    }

    function disableKnop() {
        if (carousel.scrollLeft === 0) {
            buttons[0].disabled = true;
        } else {
            buttons[0].disabled = false;
        }

        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 1) {
            buttons[1].disabled = true;
        } else {
            buttons[1].disabled = false;
        }
    }

    buttons[0].addEventListener("click", terug);
    buttons[1].addEventListener("click", volgende);

    carousel.addEventListener("scroll", disableKnop);

    disableKnop();

});





/*********************/
/*   HEADER SCROLL   */
/*********************/

/*Bronnen:
- https://www.w3schools.com/jsref/obj_window.asp 
*/

const header = document.querySelector("header");

function headerScroll() {
    if (window.scrollY > 25) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

window.addEventListener('scroll', headerScroll);
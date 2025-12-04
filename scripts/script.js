/*********************/
/*  CAROUSEL KNOPPEN */
/*********************/

/*Bronnen:
- https://fa.javascript.info/size-and-scroll
- https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy
- https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
- https://www.w3schools.com/jsref/prop_pushbutton_disabled.asp
- https://stackoverflow.com/questions/51219064/run-function-only-on-index-html-page-javascript
- https://www.w3schools.com/js/js_window_location.asp
- https://stackoverflow.com/questions/75357525/how-to-check-whether-window-location-pathname-ends-with-search
*/

if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("FrontendDevelopment")) {

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

}



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





/*********************/
/*  FOOTER KNOPPEN   */
/*********************/

document.querySelectorAll("footer > section:nth-of-type(1)").forEach(function(section) {
    const carouselFooter = section.querySelector("nav");
    const buttonsFooter = section.querySelectorAll("button");
    
    const tabbladFooter = carouselFooter.querySelector("footer a").offsetWidth;

    function terugFooter() {
        carouselFooter.scrollBy({
            left: -tabbladFooter,
        });
    }

    function volgendeFooter() {
        carouselFooter.scrollBy({
            left: tabbladFooter,
        });
    }

    function updateKnoppenFooter() {

        if (carouselFooter.scrollLeft <= 0) {
            buttonsFooter[0].style.display = "none";
        } else {
            buttonsFooter[0].style.display = "";
        }

        if (carouselFooter.scrollLeft + carouselFooter.clientWidth >= carouselFooter.scrollWidth - 1) {
            buttonsFooter[1].style.display = "none";
        } else {
            buttonsFooter[1].style.display = "";
        }
    }

    buttonsFooter[0].addEventListener("click", terugFooter);
    buttonsFooter[1].addEventListener("click", volgendeFooter);
    carouselFooter.addEventListener("scroll", updateKnoppenFooter);

    updateKnoppenFooter();
});






/*********************/
/*  FOOTER SELECTIE  */
/*********************/

/*Bronnen:
- https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute#:~:text=The%20getAttribute()%20method%20of,the%20getAttributeNode()%20method%20instead
- https://stackoverflow.com/questions/17949518/window-location-hash-what-is-it-and-its-use-cases
*/

const tabbladen = document.querySelectorAll('footer > section:nth-of-type(1) nav a');

function selecteer() {
  tabbladen.forEach(function(tabblad) {
    if (tabblad.getAttribute('href') === location.hash) {
      tabblad.classList.add('selected');
    } else {
      tabblad.classList.remove('selected');
    }
  });
}

window.addEventListener('hashchange', selecteer);
window.addEventListener('load', selecteer);





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
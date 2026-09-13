/* =====================================================
   ELEMENTS
===================================================== */

const body =
    document.body;

const themeToggle =
    document.getElementById("themeToggle");

const navbar =
    document.getElementById("navbar");

const navLinks =
    document.querySelectorAll(".nav-link");

const talk =
    document.querySelector(".talk");

const logo =
    document.querySelector(".logo");


/* =====================================================
   LOAD SAVED THEME
===================================================== */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    body.classList.add("dark");

}


/* =====================================================
   THEME TOGGLE
===================================================== */

themeToggle.addEventListener("click", () => {

    body.classList.toggle("dark");

    const isDark =
        body.classList.contains("dark");


    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );


    /* Button animation */

    themeToggle.animate(
        [
            {
                transform:
                    "scale(1) rotate(0deg)"
            },

            {
                transform:
                    "scale(.82) rotate(-12deg)"
            },

            {
                transform:
                    "scale(1) rotate(0deg)"
            }
        ],
        {
            duration:
                450,

            easing:
                "cubic-bezier(.16,1,.3,1)"
        }
    );

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});


/* =====================================================
   SUBTLE NAVBAR MOUSE MOVEMENT
===================================================== */

document.addEventListener("mousemove", (event) => {

    /*
       Disable this effect on small screens.
    */

    if (window.innerWidth <= 700) {
        return;
    }


    const x =
        event.clientX /
        window.innerWidth -
        0.5;


    const y =
        event.clientY /
        window.innerHeight -
        0.5;


    navbar.style.transform = `
        translate(
            ${x * 1.5}px,
            ${y * 1}px
        )
    `;

});


/* =====================================================
   RESET NAVBAR
===================================================== */

document.addEventListener("mouseleave", () => {

    navbar.style.transform =
        "translate(0, 0)";

});


/* =====================================================
   MAGNETIC LET'S TALK BUTTON
===================================================== */

talk.addEventListener("mousemove", (event) => {

    if (window.innerWidth <= 700) {
        return;
    }


    const rect =
        talk.getBoundingClientRect();


    const x =
        event.clientX -
        rect.left -
        rect.width / 2;


    const y =
        event.clientY -
        rect.top -
        rect.height / 2;


    talk.style.transform = `
        translate(
            ${x * 0.07}px,
            ${y * 0.10 - 3}px
        )
    `;

});


/* Reset button */

talk.addEventListener("mouseleave", () => {

    talk.style.transform =
        "translateY(0)";

});


/* =====================================================
   LOGO → HOME
===================================================== */

logo.addEventListener("click", (event) => {

    event.preventDefault();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

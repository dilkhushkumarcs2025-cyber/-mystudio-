const themeToggle =
    document.getElementById("themeToggle");

const body =
    document.body;

const navbar =
    document.getElementById("navbar");


/* ========================= 
   THEME 
========================= */

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    body.classList.add("light");
}


themeToggle.addEventListener("click", () => {

    body.classList.toggle("light");

    if (body.classList.contains("light")) {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );
    }

});


/* ========================= 
   NAVBAR MOUSE MOVEMENT 
========================= */

document.addEventListener("mousemove", (event) => {

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

    navbar.style.transform =
        `translateX(-50%) 
         translate(${x * 4}px, ${y * 2}px)`;
});


/* Reset position */

document.addEventListener("mouseleave", () => {

    navbar.style.transform =
        "translateX(-50%)";

});


/* ========================= 
   ACTIVE NAV LINK 
========================= */

const navLinks =
    document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((item) => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});


/* ========================= 
   BUTTON RIPPLE 
========================= */

document.querySelectorAll(".talk-btn").forEach((button) => {

    button.addEventListener("click", (event) => {

        const ripple =
            document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.borderRadius = "50%";
        ripple.style.background =
            "rgba(255,255,255,0.35)";
        ripple.style.pointerEvents = "none";

        const rect =
            button.getBoundingClientRect();

        ripple.style.left =
            `${event.clientX - rect.left - 5}px`;

        ripple.style.top =
            `${event.clientY - rect.top - 5}px`;

        ripple.animate(
            [
                {
                    transform: "scale(1)",
                    opacity: 0.7
                },
                {
                    transform: "scale(25)",
                    opacity: 0
                }
            ],
            {
                duration: 550,
                easing: "ease-out"
            }
        );

        button.style.position = "relative";
        button.style.overflow = "hidden";

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});

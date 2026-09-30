/* =========================
   OPEN GIFT
========================= */

const openGift = document.getElementById("openGift");
const intro = document.getElementById("intro");
const mainContent = document.getElementById("mainContent");

openGift.addEventListener("click", function () {

    intro.classList.add("hide");

    setTimeout(function () {

        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

});


/* =========================
   MUSIC
========================= */

const musicButton = document.getElementById("musicButton");
const birthdayMusic = document.getElementById("birthdayMusic");

let musicPlaying = false;

musicButton.addEventListener("click", function () {

    if (!musicPlaying) {

        birthdayMusic.play();

        musicButton.innerHTML = "⏸️ Pause Our Song";

        musicPlaying = true;

    } else {

        birthdayMusic.pause();

        musicButton.innerHTML = "🎵 Play Our Song";

        musicPlaying = false;

    }

});


/* =========================
   SCROLL
========================= */

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    section.scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   FLOATING HEARTS
========================= */

const particleContainer =
    document.querySelector(".particles");

const particleSymbols = [
    "💗",
    "💕",
    "💖",
    "✨",
    "♡",
    "♥"
];


function createParticle() {

    const particle =
        document.createElement("div");

    particle.classList.add("particle");

    particle.innerHTML =
        particleSymbols[
            Math.floor(
                Math.random() *
                particleSymbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.fontSize =
        (10 + Math.random() * 15) + "px";

    particle.style.animationDuration =
        (5 + Math.random() * 6) + "s";

    particleContainer.appendChild(particle);


    setTimeout(function () {

        particle.remove();

    }, 11000);

}


setInterval(createParticle, 500);


/* =========================
   EXTRA HEART BURST
========================= */

function heartBurst() {

    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "💗";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize = "20px";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "999";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            100 + Math.random() * 250;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        heart.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },

                {
                    transform:
                        `translate(
                            calc(-50% + ${x}px),
                            calc(-50% + ${y}px)
                        ) scale(1.2)`,

                    opacity: 0
                }
            ],
            {
                duration: 1200,
                easing: "ease-out"
            }
        );

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 1300);

    }

}


/* Run heart effect when gift opens */

openGift.addEventListener("click", function () {

    setTimeout(function () {
        heartBurst();
    }, 500);

});
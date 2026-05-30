/* ==================================================
   AARON BIRTHDAY WEBSITE - SCRIPT.JS
================================================== */

/* ================================
   PASSWORD SYSTEM
================================ */

const correctPassword = "053104";

const passwordScreen = document.getElementById("password-screen");
const envelopeScreen = document.getElementById("envelope-screen");
const mainContent = document.getElementById("main-content");

const passwordInput = document.getElementById("passwordInput");
const unlockBtn = document.getElementById("unlockBtn");
const passwordMessage = document.getElementById("passwordMessage");

unlockBtn.addEventListener("click", () => {
    const value = passwordInput.value;

    if (value === correctPassword) {
        passwordMessage.textContent = "Correct ❤️ Opening your surprise...";
        setTimeout(() => {
            passwordScreen.classList.add("hidden");
            envelopeScreen.classList.remove("hidden");
        }, 1200);
    } else {
        passwordMessage.textContent = "Wrong password 😭 Try again, my love...";
        passwordInput.classList.add("shake");

        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 500);
    }
});

/* ================================
   ENVELOPE ANIMATION
================================ */

const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

        startTypewriter();
        startCounter();
        initMusic();
        initGallery();
    }, 1200);
});

/* ================================
   TYPEWRITER EFFECT
================================ */

const letterText = `
Happy Birthday, Aaron ❤️

Today is all about celebrating you.
Thank you for every smile, every laugh, every memory, and every moment we've shared together.

Since May 2, 2026, you've made my days brighter and my heart happier.

I hope this birthday reminds you how loved, appreciated, and special you truly are.

You are one of the best things that ever happened to me.

No matter where life takes us, you will always have a special place in my heart.

I love you endlessly.

Love,
Joana ❤️
`;

function startTypewriter() {
    const typewriter = document.getElementById("typewriter");
    let i = 0;

    function type() {
        if (i < letterText.length) {
            typewriter.innerHTML += letterText.charAt(i);
            i++;
            setTimeout(type, 25);
        }
    }

    type();
}

/* ================================
   RELATIONSHIP COUNTER
================================ */

function startCounter() {
    const counterEl = document.getElementById("daysCounter");

    const startDate = new Date("2026-05-02");

    function updateCounter() {
        const now = new Date();
        const diffTime = Math.abs(now - startDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        counterEl.textContent =
            `We've been making memories together for ${diffDays} days ❤️`;
    }

    updateCounter();
    setInterval(updateCounter, 60000);
}

/* ================================
   MUSIC PLAYER
================================ */

function initMusic() {
    const audio = document.getElementById("audioPlayer");
    const playBtn = document.getElementById("playBtn");

    let isPlaying = false;

    playBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play();
            playBtn.textContent = "💖";
            isPlaying = true;
        } else {
            audio.pause();
            playBtn.textContent = "❤️";
            isPlaying = false;
        }
    });
}

/* ================================
   GALLERY LIGHTBOX
================================ */

function initGallery() {
    const images = document.querySelectorAll(".photo-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImage");
    const closeBtn = document.getElementById("closeLightbox");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightbox.classList.add("show");
            lightboxImg.src = img.src;
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("show");
        }
    });
}

/* ================================
   FINAL SURPRISE
================================ */

const surpriseBtn = document.getElementById("surpriseBtn");
const celebrationOverlay = document.getElementById("celebrationOverlay");
const heartsExplosion = document.getElementById("heartsExplosion");

surpriseBtn.addEventListener("click", () => {
    celebrationOverlay.classList.remove("hidden");

    launchHearts();
    launchConfetti();

    setTimeout(() => {
        document.getElementById("ending").scrollIntoView({
            behavior: "smooth"
        });
    }, 4000);
});

/* ================================
   HEARTS + CONFETTI EFFECT
================================ */

function launchHearts() {
    for (let i = 0; i < 80; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "floatUp 4s linear forwards";
    heart.style.zIndex = 9999;

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function launchConfetti() {
    for (let i = 0; i < 120; i++) {
        createConfetti();
    }
}

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.innerHTML = "✨";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = Math.random() * 18 + 8 + "px";
    confetti.style.animation = "fall 3s linear forwards";
    confetti.style.zIndex = 9999;

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

/* ================================
   EXTRA CSS ANIMATIONS (INJECTED)
================================ */

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(-120vh); opacity: 0; }
}

@keyframes fall {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(120vh); opacity: 0; }
}

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.9);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

.lightbox.show {
    display: flex;
}

.lightbox img {
    max-width: 90%;
    max-height: 80%;
    border-radius: 12px;
    box-shadow: 0 0 30px rgba(255,255,255,0.3);
}

#closeLightbox {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
}
`;
document.head.appendChild(style);

// ===================================
// ELEMENTS
// ===================================

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const heartButton = document.getElementById("heartButton");

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");


// ===================================
// SCREEN TRANSITIONS
// ===================================

function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(page => {
        page.classList.remove("active");
    });

    screen.classList.add("active");
}


// ===================================
// HEART BUTTON
// ===================================

let started = false;

heartButton.addEventListener("click", function () {

    if (started) return;

    started = true;

    // Show birthday reveal
    showScreen(screen2);

    // Start fireworks
    startFireworks();

    // Move to birthday wish
    setTimeout(() => {

        stopFireworks();

        showScreen(screen3);

    }, 8000);

});


// ===================================
// FIREWORKS CANVAS
// ===================================

let particles = [];

let animationId = null;

let fireworksRunning = false;


function resizeCanvas() {

    const ratio = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = window.innerWidth * ratio;
    canvas.height = window.innerHeight * ratio;

    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);


// ===================================
// CREATE FIREWORKS
// ===================================

function createFirework() {

    const x = Math.random() * window.innerWidth;

    const y = Math.random() * window.innerHeight * 0.55;

    const colors = [
        "#ff4f9a",
        "#ffd166",
        "#ffffff",
        "#c77dff",
        "#ff85a1",
        "#80ffdb"
    ];

    const color = colors[
        Math.floor(Math.random() * colors.length)
    ];

    const count = 65;

    for (let i = 0; i < count; i++) {

        const angle = Math.PI * 2 * i / count;

        const speed = Math.random() * 4 + 1;

        particles.push({

            x: x,
            y: y,

            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,

            alpha: 1,

            radius: Math.random() * 2 + 1,

            color: color

        });

    }

}


// ===================================
// ANIMATE FIREWORKS
// ===================================

function animateFireworks() {

    if (!fireworksRunning) return;

    ctx.fillStyle = "rgba(3, 3, 8, 0.20)";

    ctx.fillRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    particles.forEach((particle, index) => {

        particle.x += particle.vx;

        particle.y += particle.vy;

        particle.vy += 0.025;

        particle.alpha -= 0.009;

        ctx.globalAlpha = Math.max(0, particle.alpha);

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = particle.color;

        ctx.shadowBlur = 15;

        ctx.shadowColor = particle.color;

        ctx.fill();

        if (particle.alpha <= 0) {

            particles.splice(index, 1);

        }

    });

    ctx.globalAlpha = 1;

    ctx.shadowBlur = 0;

    animationId = requestAnimationFrame(animateFireworks);

}


// ===================================
// START FIREWORKS
// ===================================

let fireworkInterval;

function startFireworks() {

    fireworksRunning = true;

    particles = [];

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

    createFirework();

    animateFireworks();

    fireworkInterval = setInterval(() => {

        createFirework();

    }, 650);

}


// ===================================
// STOP FIREWORKS
// ===================================

function stopFireworks() {

    fireworksRunning = false;

    clearInterval(fireworkInterval);

    cancelAnimationFrame(animationId);

    particles = [];

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );

}
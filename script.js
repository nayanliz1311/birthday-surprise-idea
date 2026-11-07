const giftButton = document.getElementById("giftbutton");
const giftScreen = document.getElementById("giftscreen");
const welcomePage = document.querySelector(".welcome-page");


let giftOpened = false;

giftButton.addEventListener("click", function () {

    if (giftOpened) return;

    giftOpened = true;

    // Gift opening animation
    giftButton.classList.add("opened");

    // Gift screen fade out
    setTimeout(function () {

        giftScreen.classList.add("gift-hidden");

        // Secret Quiz reveal
        setTimeout(function () {

            giftScreen.style.display = "none";

            document.getElementById("secretQuiz").style.display = "block";

            document.getElementById("question1").style.display = "block";

        }, 300);

    }, 1300);

});
// SECRET LOVE QUIZ

const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");
const answer3 = document.getElementById("answer3");

const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const unlockButton = document.getElementById("unlockButton");

const quizError = document.getElementById("quizError");

// QUESTION 1
next1.addEventListener("click", function () {

    let answer = answer1.value.toLowerCase().trim();

    if (answer === "tasuu") {

        quizError.textContent = "";
        question1.style.display = "none";
        question2.style.display = "block";

    } else {

        quizError.textContent =
        "EXCUSE ME??? 😤 Itna bhi nahi yaad hai tumhe? 😒💗";
    }

});

// QUESTION 2
next2.addEventListener("click", function () {

    let answer = answer2.value.toLowerCase().trim();

    if (answer === "pavagadh" || answer === "pavaghad") {

        quizError.textContent = "";
        question2.style.display = "none";
        question3.style.display = "block";

    } else {

        quizError.textContent =
        "SERIOUSLYYY??? 😭 Pavagadh bhi bhool gayi? 😤";
    }

});

// QUESTION 3
unlockButton.addEventListener("click", function () {

    let answer = answer3.value.trim();

    if (answer === "56") {

        quizError.textContent = "";
        startHeartAnimation();

        // HEART ANIMATION NEXT

    } else {

        quizError.textContent =
        "WRONGGGG! 😠 Apni memory improve karo madam! ";
    }

});
// BIG PINK HEART ANIMATION

function startHeartAnimation() {

    const quizPage = document.getElementById("secretQuiz");
    const heartScreen = document.getElementById("heartScreen");
    const welcomeCard= document.querySelector(".welcome-card")
    const welcomePage= document.querySelector(".welcome-page")
    // Hide quiz
    quizPage.style.display = "none";

    // Show heart
    heartScreen.style.display = "flex";

    setTimeout(function () {
        heartScreen.classList.add("show-heart");
    }, 100);

    // Zoom heart
    setTimeout(function () {
        heartScreen.classList.remove("show-heart");
        heartScreen.classList.add("zoom-heart");
    }, 4500);

    // Welcome card reveal
    setTimeout(function () {

        heartScreen.style.display = "none";

        heartScreen.classList.remove(
            "show-heart",
            "zoom-heart"
        );

        welcomeCard.style.display = "block";

        setTimeout(function () {
            welcomePage.classList.add("show-welcome");
        }, 100);

    }, 7000);
}
// BIRTHDAY PAGE NAVIGATION

const openSurpriseButton = document.getElementById("openSurprise");
const birthdayPage = document.getElementById("birthdayPage");
const welcomeCard = document.querySelector(".welcome-card");

openSurpriseButton.addEventListener("click", function () {

    welcomeCard.style.display = "none";

    birthdayPage.style.display = "flex";

    setTimeout(function () {
        birthdayPage.style.opacity = "1";
        birthdayPage.style.visibility = "visible";
        birthdayPage.style.transform = "translateY(0)";
    }, 50);

});
// MAGICAL DOOR TO SECRET GARDEN

const gardenNextButton = document.getElementById("nextButton");
const gardenPage = document.getElementById("gardenPage");
const doorPage = document.getElementById("birthdayPage");

gardenNextButton.addEventListener("click", function () {

    doorPage.style.display = "none";

    gardenPage.style.display = "block";
    gardenPage.style.opacity = "0";

    setTimeout(function () {
        gardenPage.style.opacity = "1";
    }, 100);

});
// SECRET GARDEN TO BIRTHDAY CELEBRATION

const gardenSurpriseButton = document.getElementById("gardenNextButton");
const celebrationPage = document.getElementById("celebrationPage");

gardenSurpriseButton.addEventListener("click", function () {

    // Hide garden
    gardenPage.style.display = "none";

    // Show birthday celebration
    celebrationPage.style.display = "block";

    setTimeout(function () {
        celebrationPage.style.opacity = "1";
    }, 100);

});
// BIRTHDAY LETTER PAGE
const letterButton = document.getElementById("letterbutton");
const letterPage = document.getElementById("letterPage");


if (letterButton) {
    letterButton.addEventListener("click", function () {
        celebrationPage.style.display = "none";
        letterPage.style.display = "block";
        letterPage.scrollTop = 0;
    });
}

// OPEN THE ENVELOPE
const openLetterButton = document.getElementById("openLetterButton");
const envelopeContainer = document.getElementById("envelopeContainer");
const letterPaper = document.getElementById("letterPaper");

if (openLetterButton) {
    openLetterButton.addEventListener("click", function () {
        envelopeContainer.style.display = "none";
        letterPaper.style.display = "block";
        letterPaper.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}
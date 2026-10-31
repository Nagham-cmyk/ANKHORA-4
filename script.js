
/* =========================
   ANKHORA - JAVASCRIPT
========================= */

// INTRO VIDEO

const intro = document.getElementById("intro");
const introVideo = document.getElementById("introVideo");
const skipIntro = document.getElementById("skipIntro");
const mainWebsite = document.getElementById("mainWebsite");

function enterWebsite() {

    intro.classList.add("hide");

    mainWebsite.classList.add("show");

    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);

    introVideo.pause();

    startMusic();
}

// Skip intro button

skipIntro.addEventListener("click", enterWebsite);

// When video ends

introVideo.addEventListener("ended", enterWebsite);


// =========================
// BACKGROUND MUSIC
// =========================

const backgroundMusic = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

backgroundMusic.volume = 0.25;

let musicPlaying = false;

function startMusic() {

    backgroundMusic.play()
        .then(() => {
            musicPlaying = true;
            musicButton.textContent = "♫";
        })
        .catch(() => {
            musicPlaying = false;
            musicButton.textContent = "♪";
        });

}

// Music toggle button

musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.textContent = "♪";

    } else {

        startMusic();

    }

});


// =========================
// HIEROGLYPH NAME GAME
// =========================

const nameInput = document.getElementById("nameInput");

const convertButton = document.getElementById("convertButton");

const hieroglyphResult = document.getElementById("hieroglyphResult");


// Simplified phonetic symbol mapping

const hieroglyphs = {

    A: "𓄿",
    B: "𓃀",
    C: "𓎡",
    D: "𓂧",
    E: "𓇋",
    F: "𓆑",
    G: "𓎼",
    H: "𓉔",
    I: "𓇋",
    J: "𓆓",
    K: "𓎡",
    L: "𓃭",
    M: "𓅓",
    N: "𓈖",
    O: "𓅱",
    P: "𓊪",
    Q: "𓎡",
    R: "𓂋",
    S: "𓋴",
    T: "𓏏",
    U: "𓅱",
    V: "𓆑",
    W: "𓅱",
    X: "𓎡𓋴",
    Y: "𓇌",
    Z: "𓊃"

};


// Convert name

function convertName() {

    const name = nameInput.value
        .trim()
        .toUpperCase();

    if (name === "") {

        hieroglyphResult.textContent =
            "Please enter your name first.";

        return;

    }

    let result = "";

    for (let letter of name) {

        if (hieroglyphs[letter]) {

            result += hieroglyphs[letter] + " ";

        } else if (letter === " ") {

            result += "   ";

        }

    }

    if (result.trim() === "") {

        hieroglyphResult.textContent =
            "Please enter a name using English letters.";

    } else {

        hieroglyphResult.textContent = result;

    }

}


// Reveal name button

convertButton.addEventListener("click", convertName);


// Allow Enter key

nameInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        convertName();

    }

});

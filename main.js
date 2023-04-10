const words = ['BEAUTIFUL', 'ENGAGING', 'EFFICIENTLY', 'RESPONSIVE', 'FUNCTIONAL', 'FUN', 'OPTIMIZED', 'FASTER', 'BIGGER', 'BETTER'];
let currentIndex = 0;
const changingWord = document.getElementById('changing-word');

function changeWord() {
    currentIndex++;
    if (currentIndex >= words.length) {
        currentIndex = 0;
    }

    // Fade out old word
    changingWord.classList.add('fade-out-right');

    // Update word after fade out is complete
    setTimeout(() => {
        changingWord.textContent = words[currentIndex];
        changingWord.classList.remove('fade-out-right');
        changingWord.classList.add('fade-in-left');
    }, 1000);

    // Remove fade-in animation class after it's complete
    setTimeout(() => {
        changingWord.classList.remove('fade-in-left');
    }, 2000);
}

setInterval(changeWord, 3000);
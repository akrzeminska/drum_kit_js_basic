let drums = document.querySelectorAll('.drum');

drums.forEach(drum => {
    drum.addEventListener('click', () => {
       const shortcutContent = drum.querySelector('.shortcut').textContent;
        playSound(shortcutContent);
        playAnimation(shortcutContent);
    })
})

document.addEventListener('keypress', (event)=> {
    playSound(event.key);
    playAnimation(event.key);
})

const sounds = {
    w: "assets/sounds/clap.wav",
    s: "assets/sounds/hihat.wav",
    d: "assets/sounds/kick.wav",
    f: "assets/sounds/openhat.wav",
    g: "assets/sounds/boom.wav",
    h: "assets/sounds/ride.wav",
    j: "assets/sounds/snare.wav",
    k: "assets/sounds/tom.wav",
    l: "assets/sounds/tink.wav"
};

function playSound(key) {
    key = key.toLowerCase();
    const audio = new Audio(sounds[key]);
    audio.play();
}

function playAnimation (currentKey) {
    const animationTime = 250;
    currentKey = currentKey.toLowerCase();
    let activeButton = document.getElementById(currentKey);  
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, animationTime)
}
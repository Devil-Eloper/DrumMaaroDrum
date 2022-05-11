var drumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var button = this.innerHTML;
        makeSound(button);
        buttonAnimation(button)
    });
}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key)
});

function playSound(path) {
    var audio = new Audio(path);
    audio.play();
}

function makeSound(key) {
    switch (key) {
        case "w":
            playSound("sounds/tom-1.mp3")
            break;
        case "a":
            playSound("sounds/tom-2.mp3")
            break;
        case "s":
            playSound("sounds/tom-3.mp3")
            break;
        case "d":
            playSound("sounds/tom-4.mp3")
            break;
        case "j":
            playSound("sounds/snare.mp3")
            break;
        case "k":
            playSound("sounds/crash.mp3")
            break;
        case "l":
            playSound("sounds/kick-bass.mp3")
            break;
        default:

    }
}

function buttonAnimation(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function (){
        document.querySelector("."+key).classList.remove("pressed");
    }, 100);
}
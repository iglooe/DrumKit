var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

        });
}

document.addEventListener("keydown", function(event) {
    
    makeSound(event.key);

    buttonAnimation(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
                var tom1 = new Audio('sounds/snare-acoustic01.ogg');
                tom1.play();
            break;

        case "a":
                var tom2 = new Audio('sounds/snare-acoustic02.ogg');
                tom2.play();
            break;
        
        case "s":
                var tom3 = new Audio('sounds/snare-big.ogg');
                tom3.play();
            break;

        case "d":
                var tom4 = new Audio('sounds/snare-dist01.ogg');
                tom4.play();
            break;

        case "j":
                var snare = new Audio('sounds/snare-smasher.ogg');
                snare.play();
            break;

        case "k":
                var crash = new Audio('sounds/soft-hitwhistle.ogg');
                crash.play();
            break;

        case "l":
                var bass = new Audio('sounds/kick-bass.ogg');
                bass.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(currentKey) {
    
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);

}
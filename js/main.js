const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
document.querySelector("body").addEventListener("keyup",(event)=>{
    if (alphabet.includes(event.key)){
        //console.log(`The ${event.key} is available`)
        let letter = `./sounds/${event.key}.wav`;
        let letter_sound = new Audio(letter);
        letter_sound.play();
        document.querySelector(".default-mode").innerText = event.key.toUpperCase();
        document.querySelector(".default-mode").classList.add("english-letter");
    }else{
        //console.log(`The ${event.key} is not available`)
        let message = "أضغط على أي حرف انجليزي لتستمع الى نطقه"
        document.querySelector(".default-mode").innerText = message;
        document.querySelector(".default-mode").classList.remove("english-letter");
    }
})
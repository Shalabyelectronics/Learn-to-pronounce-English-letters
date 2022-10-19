const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let details = navigator.userAgent;
let regexp = /android|iphone/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice){
    document.querySelector("textarea").style.setProperty("display","block");
    document.querySelector("#myInput").addEventListener("input",()=>{
        let getText = document.querySelector("#myInput");
        playLetterSound(getText.value)
        getText.value = "";
    })
}else{
    document.querySelector("body").addEventListener("keyup",(event)=>{
        playLetterSound(event.key);
    })
}




function playLetterSound(char){
    if (alphabet.includes(char)){
        //console.log(`The ${event.key} is available`)
        let letter = `./sounds/${char}.wav`;
        let letter_sound = new Audio(letter);
        letter_sound.play();
        document.querySelector(".default-mode").innerText = char.toUpperCase();
        document.querySelector(".default-mode").classList.add("english-letter");
    }else{
        //console.log(`The ${event.key} is not available`)
        let message = "أضغط على أي حرف انجليزي لتستمع الى نطقه"
        document.querySelector(".default-mode").innerText = message;
        document.querySelector(".default-mode").classList.remove("english-letter");
    }
}
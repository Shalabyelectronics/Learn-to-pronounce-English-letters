const alphabet = /^[a-zA-Z]{1}$/

let details = navigator.userAgent;
let regexp = /android|iphone/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice){
    $("input").css("display","block");
    document.querySelector("#myInput").addEventListener("input",(event)=>{   
        playLetterSound(event.data)
        $("#myInput").val("");
    })
}else{
    $("body").keyup((event)=>{
        playLetterSound(event.key);
    })
}




function playLetterSound(char){
    if (alphabet.test(char)){
        //console.log(`The ${event.key} is available`)
        let letter = `./sounds/${char.toLowerCase()}.wav`;
        let letter_sound = new Audio(letter);
        letter_sound.play();
        $(".default-mode").text(char.toUpperCase());
        $(".default-mode").addClass("english-letter");
    }else{
        //console.log(`The ${event.key} is not available`)
        let message = "أضغط على أي حرف انجليزي لتستمع الى نطقه"
        $(".default-mode").text(message);
        $(".default-mode").removeClass("english-letter");
    }
}
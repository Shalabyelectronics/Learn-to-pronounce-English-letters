const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
document.querySelector("body").addEventListener("keypress",(event)=>{
    if (alphabet.includes(event.key)){
        console.log(`The ${event.key} is available`)
    }else{
        console.log(`The ${event.key} is not available`)
    }
})
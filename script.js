let output = document.getElementById("output-text")
let btn = document.getElementById("btn")
let score = document.getElementById("score")
let chances = document.getElementById("chances")
let winMusic = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let nextBtn = document.getElementById("nextBtn")
let heading = document.getElementById("heading")
let restartbtn = document.getElementById("restartBtn")
let title = document.getElementById("title")

let number1 = Math.floor(Math.random( ) * 5)
btn.addEventListener("click" , function(){
    let input = document.getElementById("input").value;
    ting.play()
    


    if(input == number1){
output.innerHTML = `   !! WIN !! <br> Yes It Was ${number1}`
winMusic.play()



    }
else if(input > number1){
    output.innerHTML = `Guess Low ! `
}
else if(input < number1){
    output.innerHTML = `Guess High ! `

}


})
restartBtn.addEventListener("click",function(){
    window.location.reload()
})
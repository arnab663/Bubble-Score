
// function makeBubble(){
//     var clutter = ""

//     for(var i=1; i<=160; i++){
//         clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
//     }

//     document.querySelector('#panbottom').innerHTML = clutter
// }

// var timer = 30
// function runtimer(){
//     var timerInterval = setInterval(()=>{
//         if(timer>0){
//             timer--
//             document.querySelector('#timerValue').textContent = timer
//         }
//         else{
//             endOfGame()
//             clearInterval(timerInterval)
//         }
//     },1000)
// }


// var score = 0
// function increaseScore(hitVal){
//     score+=hitVal
//     document.querySelector('#scoreValue').textContent = score
// }


// var hit = 0
// function hitCount(){
//     hit++
//     document.querySelector('#hitValue').textContent = hit
// }


// // Event bubbling 
// document.querySelector('#panbottom').addEventListener('click',(dets)=>{
//     // console.log(dets.target.className)
//     if(dets.target.className=='bubble'){
//         var hitBubbleValue = Number(dets.target.textContent)
//         increaseScore(hitBubbleValue)
//         hitCount()
//         makeBubble()
//     }
// })

// winModalStyle = "display:block;position: absolute;top: 20%;left: 30%;height: 40vh;width: 35vw;border-radius: 15px;background-color: #602c07;color: white;display: flex;flex-direction: column;gap: 15px;align-items: center;justify-content: center"

// function endOfGame(){
//     document.querySelector('#showScore').textContent = `Your score is ${score}`
//     document.querySelector('#showHitCount').textContent = `You have made ${hit} hits`
//     document.querySelector('#game-end').setAttribute("style",winModalStyle) 
// }

// runtimer()

// makeBubble()


var startBtn = document.querySelector("#start")
startBtn.addEventListener('click',()=>{
    startBtn.setAttribute('style','display:none')
    startGame()
})
function startGame(){  
    function makeBubble(){
        var clutter = ""

        for(var i=1; i<=160; i++){
            clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
        }

        document.querySelector('#panbottom').innerHTML = clutter
    }

    var timer = 10
    function runtimer(){
        var timerInterval = setInterval(()=>{
            if(timer>0){
                timer--
                document.querySelector('#timerValue').textContent = timer
            }
            else{
                endOfGame()
                clearInterval(timerInterval)
            }
        },1000)
    }


    var score = 0
    function increaseScore(hitVal){
        if(timer){
            score+=hitVal
            document.querySelector('#scoreValue').textContent = score
        }
    }


    var hit = 0
    function hitCount(){
        if(timer){
            hit++
            document.querySelector('#hitValue').textContent = hit
        }

    }


    // Event bubbling 
    document.querySelector('#panbottom').addEventListener('click',(dets)=>{
        // console.log(dets.target.className)
        if(dets.target.className=='bubble'){
            if(dets.target.className != 'disabled')
            {
                var hitBubbleValue = Number(dets.target.textContent)
                increaseScore(hitBubbleValue)
                hitCount()
                // makeBubble()
                dets.target.classList.add('disabled')
                dets.target.setAttribute('style','opacity:0.5;pointer-events:none;')
            }
            // console.log(dets.target)
        }
    })

    winModalStyle = "display:block;position: absolute;top: 20%;left: 30%;height: 40vh;width: 35vw;border-radius: 15px;background-color: #602c07;color: white;display: flex;flex-direction: column;gap: 15px;align-items: center;justify-content: center; z-index:2; padding:1vw"

    function endOfGame(){
        // document.querySelector('#panbottom').innerHTML = ''
        document.querySelector('#showScore').textContent = `Your score is ${score}`
        document.querySelector('#showHitCount').textContent = `You have made ${hit} hits`
        document.querySelector('#game-end').setAttribute("style",winModalStyle) 
        document.querySelector('#panbottom').setAttribute('style','pointer-events:none')
    }

    runtimer()

    makeBubble()
}
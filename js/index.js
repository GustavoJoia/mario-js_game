let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')
let score = document.querySelector('.score').children[0]
score.textContent = 0
let points = +score.textContent

let scoreLoop

document.body.onload = () =>{
    
    scoreLoop = setInterval(()=>{
        let pipePosition = pipe.offsetLeft

        if(pipePosition <= 50){
            points++
            score.textContent = points
            
        }
    },250)

}

let jump = (k) =>{

    if(k.keyCode == 32){

        mario.classList.add('jump')

        let jumpLoop = setInterval(()=>{

            mario.classList.remove('jump')

            clearTimeout(jumpLoop)

        },1000)

    }

    

}

let loop = setInterval(()=>{

    let pipePosition = pipe.offsetLeft
    let marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')

    if(pipePosition <= 75 && pipePosition > 10 && marioPosition <= 58){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.src = './img/game-over.png'
        mario.style.width = '65px'
        mario.style.marginLeft = '30px'

        clearInterval(loop)
        clearInterval(scoreLoop)

        setInterval(()=>{
            mario.classList.add('game-over')
        },1000)

    }

},5)

document.addEventListener('keydown',(k)=>{
    jump(k)
})

document.addEventListener('click',()=>{
    mario.classList.add('jump')

        let jumpLoop = setInterval(()=>{

            mario.classList.remove('jump')

            clearTimeout(jumpLoop)

        },1000)

})
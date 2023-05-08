let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')
let score = document.querySelector('.score').children[0]
score.textContent = 0
let points = +score.textContent

export default function gameLoop(){

    let scoreLoop

    document.body.onload = () =>{
    
        let bool
        
        scoreLoop = setInterval(()=>{
            let pipePosition = pipe.offsetLeft
    
            console.log(pipePosition)
    
            if(pipePosition >= 250){
                bool = true
                console.log(bool)
            }
    
            if(pipePosition <= 35 && pipePosition >= -100){
    
                if(bool == true){
    
                    bool = false
                    console.log(bool)
                    points++
                    score.textContent = points
    
                }
                
            }
        },300)
    
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
                mario.style.bottom = '-10em'
            },1000)
    
        }
    
    },5)

}
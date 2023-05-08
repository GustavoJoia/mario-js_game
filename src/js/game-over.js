let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')

export default function gameOver(pipePosition, marioPosition, loop, scoreLoop){

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`
    mario.src = '../img/game-over.png'
    mario.style.width = '65px'
    mario.style.marginLeft = '30px'

    clearInterval(loop)
    clearInterval(scoreLoop)

    setInterval(()=>{
        mario.classList.add('game-over')
        mario.style.bottom = '-10em'
    },1000)

}
let mario = document.querySelector('.mario')
let pipe = document.querySelector('.pipe')
let score = document.querySelector('.score').children[0]
score.textContent = 0
let points = +score.textContent

import jump, { j } from "./jump.js"
import gameLoop from "./loop.js"

gameLoop()

document.addEventListener('keydown',(k)=>{
    jump(k)
})

document.addEventListener('click',()=>{
    j()
})
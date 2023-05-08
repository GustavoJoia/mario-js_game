let mario = document.querySelector('.mario')

export default function jump(k){

    if(k.keyCode == 32){
        j()
    }

}

export function j(){
    mario.classList.add('jump')

        let jumpLoop = setInterval(()=>{

            mario.classList.remove('jump')

            clearTimeout(jumpLoop)

        },1000)
}
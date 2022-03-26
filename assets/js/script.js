//BOTAO PLAY E PAUSE 
document.querySelectorAll('.btn-play').forEach((el)=>{

    el.addEventListener('click', ()=>{

        el.style.display = 'none';
    
        var video = el.previousElementSibling;
        var tempoVideo = el.nextElementSibling;
        var pause = tempoVideo.nextElementSibling;

        pause.style.display = 'block';
        
        
        video.addEventListener('timeupdate',()=>{
            let duracao = video.duration
            let resto = video.currentTime

            let resultado = duracao - resto;

            let minutos = parseInt(resultado/60);
            let segundos = Math.ceil(resultado%60)

            if(segundos<10){
            tempoVideo.textContent = minutos+':0'+segundos; 
            }
             else{
            tempoVideo.textContent = minutos+':'+segundos; 
             }
        })
        video.play();             
        
    })
})

document.querySelectorAll('.btn-pause').forEach((el)=>{
    el.addEventListener('click',()=>{
        el.style.display = 'none';

        let video = el.previousElementSibling.previousElementSibling.previousElementSibling.pause();
        let btnPlay = el.previousElementSibling.previousElementSibling;
        btnPlay.style.display = "block"
        
    })
})



//BOTÃO PARA ATIVAR E DESATIVAR SOM//

document.querySelectorAll('.btnNoMuted').forEach((el)=>{

    el.addEventListener('click', ()=>{
    
    el.style.display = 'none';

    let btnSemSom=el.nextElementSibling
    console.log(btnSemSom)

    btnSemSom.style.display = 'block';
    

    let tirarSom = el.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    tirarSom.muted = true;
    

    })


})

document.querySelectorAll('.btnMuted').forEach((el)=>{
    el.addEventListener('click',()=>{
        el.style.display = 'none';

        let btnColocarSom = el.previousElementSibling
        console.log(btnColocarSom)
        btnColocarSom.style.display = 'block';

        let video = el.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling

        video.muted = false;
    })

})


//FUNCAO DE CURTIDA NO VIDEO
document.querySelectorAll('.curtida').forEach((el)=>{ 

   // console.log(el)

    el.addEventListener('dblclick', ()=>{
    //console.log('db')

    let like = el.lastElementChild
    
    like.style.display = 'block'

    setTimeout(() => {
        like.style.display = 'none';
    },325);


    })
})
 

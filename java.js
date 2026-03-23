

const musicas = 
[
    'musicas/1. Lucas A.R.T. - MANGEKYO SHARINGAN [Prod. 808 Ander] - 7 Minutoz (youtube).mp3',

    'musicas/2. Lucas A.R.T. - LAÇOS [Prod. 808 Ander] - 7 Minutoz (youtube).mp3',

    'musicas/3. Lucas A.R.T. - KAGUYA [Prod. 808 Ander] - 7 Minutoz (youtube).mp3',

    'musicas/4. Lucas A.R.T. - RINNEGAN [Prod. Bonk Beatz] - 7 Minutoz (youtube).mp3',

    'musicas/5. Lucas A.R.T. - SHIPPUDEN [Prod. 808 Ander] - 7 Minutoz (youtube).mp3',

    'musicas/6. Lucas A.R.T. - TSUKUYOMI INFINITO [Prod. 808 Ander] - 7 Minutoz (youtube).mp3',

    'musicas/7. Lucas A.R.T. - JINCHUURIKI [Prod. 808 Ander] - 7 Minutoz (youtube).mp3',

    'musicas/8. Lucas A.R.T. - VALE DO FIM [Prod. 808 Ander] - 7 Minutoz (youtube).mp3',

    'musicas/9. Lucas A.R.T. - KATON [Prod. 808 Ander] - 7 Minutoz (youtube).mp3'
];

console.log(musicas)


let iniciar = document.getElementById("iniciar")
let voltar = document.getElementById("voltar")
let reniciar = document.getElementById("reniciar")
let parar = document.getElementById("parar")
let proxima = document.getElementById("proxima")


iniciar.addEventListener("click",()=>{
    alert("vou fazer sozinho")

    // tem que pecorrer e fazer uma funçao para o player

    let c
    for(c = 0 ; c< musicas.length;c++){
        iniciar.onplay()
    }
})

voltar.addEventListener("click",()=>{

})

reniciar.addEventListener("click",()=>{

})

parar.addEventListener("click",()=>{
    iniciar = null
})

proxima.addEventListener("click",()=>{
    
})
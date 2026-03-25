

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

    let audio = document.getElementById("audio")
    let iniciar = document.getElementById("iniciar")
    let voltar = document.getElementById("voltar")
    let reniciar = document.getElementById("reniciar")
    let parar = document.getElementById("parar")
    let proxima = document.getElementById("proxima")
    let tempoAtual = document.getElementById("tempoAtual")
    let barra = document.getElementById("barra")
    let tempoTotal = document.getElementById("tempoTotal")

    let index = 0
    audio.src = musicas[index]
    audio.load(); // 🔥 força recarregar
    audio.play();


    audio.addEventListener("timeupdate", () => {
        let progresso = (audio.currentTime / audio.duration) * 100;
        barra.value = progresso;

        tempoAtual.innerText = formatarTempo(audio.currentTime);
    });

    audio.addEventListener("loadedmetadata", () => {
        tempoTotal.innerText = formatarTempo(audio.duration);
    });

    function formatarTempo(segundos) {
        let min = Math.floor(segundos / 60);
        let seg = Math.floor(segundos % 60);

        if (seg < 10) seg = "0" + seg;

        return min + ":" + seg;
    }

    barra.addEventListener("input", () => {
        let tempo = (barra.value / 100) * audio.duration;
        audio.currentTime = tempo;
    });

    iniciar.addEventListener("click",()=>{

        audio.play()

    })

    parar.addEventListener("click",()=>{
        audio.pause()
    })

    voltar.addEventListener("click",()=>{
        index--
        if (index < 0) {
            index = musicas.length - 1;
        }
        audio.src = musicas[index]
        audio.play()
    })

    proxima.addEventListener("click",()=>{
        index++
        if (index >= musicas.length) {
            index=0
        }
        audio.src = musicas[index]
        audio.play()
    })


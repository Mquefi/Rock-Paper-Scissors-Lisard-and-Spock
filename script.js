const placar = {
    venceu: 0,
    perdeu: 0,
    empatou: 0
};

/*const placar = JSON.parse(localStorage.getItem('placar'));*/

atualizaPlacarElement ();

function startGame (escolhaJogador) {
    const escolhaComputador = pegarEscolhaComputador ();
    let result = '';
    let pontos = '';

    if (escolhaJogador === 'pedra') {
        if (escolhaComputador === 'pedra') {
            result = 'Pedra x Pedra - Empate';
            pontos = 'Empatou';
        }else if (escolhaComputador === 'papel') {
            result = 'O Papel cobriu a Pedra - Você Perdeu';
            pontos = 'Perdeu';
        }else if (escolhaComputador === 'tesoura') {
            result = 'A Pedra esmagou a Tesoura - Você Ganhou';
            pontos = 'Ganhou';
        }else if (escolhaComputador === 'lagarto') {
            result = 'A Pedra esmagou o Lagarto - Você Ganhou';
            pontos = 'Ganhou';
        }else if (escolhaComputador === 'spock') {
            result = 'Spock vaporizou a Pedra - Você Perdeu';
            pontos = 'Perdeu';
        }
    }else
    if (escolhaJogador === 'papel') {
        if (escolhaComputador === 'pedra') {
            result = 'O Papel cobriu a Pedra - Você Ganhou';
            pontos = 'Ganhou';
        }else if (escolhaComputador === 'papel') {
            result = 'Papel x Papel - Empate';
            pontos = 'Empatou';
        }else if (escolhaComputador === 'tesoura') {
            result = 'A Tesoura cortou o Papel - Você Perdeu';
            pontos = 'Perdeu';
        }else if (escolhaComputador === 'lagarto') {
            result = 'O Lagarto comeu o Papel - Você Perdeu';
            pontos = 'Perdeu';
        }else if (escolhaComputador === 'spock') {
            result = 'O Papel desaprovou Spock - Você Ganhou';
            pontos = 'Ganhou';
        }
    }else
    if (escolhaJogador === 'tesoura') {
        if (escolhaComputador === 'pedra') {
            result = 'A Pedra esmagou a Tesoura - Você Perdeu';
            pontos = 'Perdeu';
        }else if (escolhaComputador === 'papel') {
            result = 'A Tesoura cortou o Papel - Você Ganhou';
            pontos = 'Ganhou';
        }else if (escolhaComputador === 'tesoura') {
            result = 'Tesoura x Tesoura - Empate';
            pontos = 'Empatou';
        }else if (escolhaComputador === 'lagarto') {
            result = 'A Tesoura decapitou o Lagarto - Você Ganhou';
            pontos = 'Ganhou';
        }else if (escolhaComputador === 'spock') {
            result = 'Spock esmagou a Tesoura - Você Perdeu';
            pontos = 'Perdeu';
        }
    }else
    if (escolhaJogador === 'lagarto') {
        if (escolhaComputador === 'pedra') {
            result = 'A Pedra esmagou o Lagarto - Você Perdeu';
            pontos = 'Perdeu';
        }else if (escolhaComputador === 'papel') {
            result = 'O Lagarto comeu o Papel - Você Ganhou';
            pontos = 'Ganhou';
        }else if (escolhaComputador === 'tesoura') {
            result = 'A Tesoura decapitou o Lagarto - Você Perdeu';
            pontos = 'Perdeu';
        }else if (escolhaComputador === 'lagarto') {
            result = 'Lagarto x Lagarto - Empate';
            pontos = 'Empatou';
        }else if (escolhaComputador === 'spock') {
            result = 'O Lagarto envenenou o Spock - Você Ganhou';
            pontos = 'Ganhou';
        }
    }else
    if (escolhaJogador === 'spock') {
        if (escolhaComputador === 'pedra') {
            result = 'Spock vaporizou a Pedra - Você Ganhou';
            pontos = 'Ganhou';
        }else if (escolhaComputador === 'papel') {
            result = 'O Papel desaprovou Spock - Você Perdeu';
            pontos = 'Perdeu';
        }else if (escolhaComputador === 'tesoura') {
            result = 'Spock esmagou a Tesoura - Você Ganhou';
            pontos = 'Ganhou';
        }else if (escolhaComputador === 'lagarto') {
            result = 'O Lagarto envenenou o Spock - Você Perdeu';
            pontos = 'Perdeu';
        }else if (escolhaComputador === 'spock') {
            result = 'Spock x Spock - Empate';
            pontos = 'Empatou';
        }
    }

    if (pontos === 'Ganhou') {
        placar.venceu += 1;
    }else
    if (pontos === 'Perdeu') {
        placar.perdeu += 1;
    }else
    if (pontos === 'Empatou') {
        placar.empatou += 1;
    }

    /* LOCAL STORAGE OBJECT - Salvar permanentemente e JSOn pra transforma o objeto em string*/
    localStorage.setItem ('placar',JSON.stringify(placar));
    
    atualizaPlacarElement ();

    alert (`Você escolheu ${escolhaJogador}. Computador escolheu ${escolhaComputador}.

${result}

Placar - Venceu: ${placar.venceu}, Perdeu: ${placar.perdeu}, Empatou: ${placar.empatou}`);
};

    function pegarEscolhaComputador () {
        const numAleatorio = Math.random ();

        let escolhaComputador = '';

        if (numAleatorio >= 0 && numAleatorio < 1/5) {
            escolhaComputador = 'pedra';
        }else if (numAleatorio >= 1/5 && numAleatorio < 2/5) {
            escolhaComputador = 'papel';
        }else if (numAleatorio >= 2/5 && numAleatorio < 3/5) {
            escolhaComputador = 'tesoura';
        }else if (numAleatorio >= 3/5 && numAleatorio < 4/5) {
            escolhaComputador = 'lagarto';
        }else if (numAleatorio >= 4/5 && numAleatorio < 5/5) {
            escolhaComputador = 'spock';
        }
        return escolhaComputador;
    }

    function reiniciarJogo () {
        placar.venceu = 0;
        placar.perdeu = 0;
        placar.empatou = 0;
        atualizaPlacarElement ();
        alert (`Placar - Venceu: ${placar.venceu}, Perdeu: ${placar.perdeu}, Empatou: ${placar.empatou}`);
    }

    function atualizaPlacarElement () {
        document.querySelector('.result')
    .innerHTML = `Placar - Venceu: ${placar.venceu}, Perdeu: ${placar.perdeu}, Empatou: ${placar.empatou}`;
    }

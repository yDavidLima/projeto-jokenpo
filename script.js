// Selecionando elementos HTML pelo seletor de classe
const resultadoMaq = document.querySelector(".result-ai")// Elemento para exibir a escolha da AI
const vitoriaDerrota = document.querySelector(".ganhou-perdeu")// Elemento para exibir se o jogador ganhou ou perdeu
const pontuacaoDerrota = document.querySelector(".span-ponto-maq")// Elemento para exibir a contagem de derrotas
const pontuacaoVitoria = document.querySelector(".span-ponto-human")// Elemento para exibir a contagem de vitórias

let contarDerrota = 0 //Contador de Derrotas
let contarVitoria = 0 //Contador de Vitórias


// Função acionada quando o jogador faz uma escolha
const humanAcao = (escolha) => {
    

    playTheGame(escolha, maquina())// Chama a função playTheGame passando a escolha do jogador e a escolha da AI
    


}

// Função para gerar aleatoriamente a escolha da AI
const maquina = () => {
    const maquinaEscolha = ["👊🏼", "🖐🏾", "✌🏻"] // Função para gerar aleatoriamente a escolha da AI
    const aleatorio = Math.floor(Math.random() * 3) // Gera um número aleatório entre 0 e 2


    return maquinaEscolha[aleatorio] // Retorna a escolha aleatória da AI


}


// Função principal do jogo
const playTheGame = (human, maqai) => { // Essa parte foi criada primeiro para despois passar os valores dos argumentos lá em cima
    
        resultadoMaq.innerHTML = ` AI: ` + maqai // Exibe a escolha da AI
        console.log(` maquina: ` + maqai)

    if (human === maqai) {
        vitoriaDerrota.innerHTML = "Empatou, Tente De Novo"
    } else if (
        (human === "🖐🏾" && maqai === "✌🏻") || // Comparações das combinações em que o jogador perde
        (human === "👊🏼" && maqai === "🖐🏾") ||
        (human === "✌🏻" && maqai === "👊🏼")
    ) {
        contarDerrota++ // Incrementa a contagem de derrotas
        vitoriaDerrota.innerHTML = "Você Perdeu kk "
        pontuacaoDerrota.innerHTML = contarDerrota // Exibi a mensagem de derrota

    } else {
        contarVitoria++
        vitoriaDerrota.innerHTML = "Você Ganhou"
        pontuacaoVitoria.innerHTML = contarVitoria
    }



}








//Velocidade maxima de ate 70
//a cada 5km acima do limite ganha 1 ponto
//math.floor()
//caso pontos maior que 12 = "carteira suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa');
        else
            console.log('pontos',pontos);
    }
}
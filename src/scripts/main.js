window.onload = function() {
    var canvas = document.getElementById('smileyCanvas');
    var ctx = canvas.getContext('2d');

    // Desenha o rosto
    ctx.beginPath();
    ctx.arc(200, 200, 150, 0, Math.PI * 2, true); // Círculo exterior
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.stroke();

    // Desenha os olhos
    ctx.beginPath();
    ctx.arc(140, 150, 20, 0, Math.PI * 2, true);  // Olho esquerdo
    ctx.fillStyle = 'black';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(260, 150, 20, 0, Math.PI * 2, true);  // Olho direito
    ctx.fillStyle = 'black';
    ctx.fill();

    // Desenha a boca
    ctx.beginPath();
    ctx.arc(200, 250, 70, 0, Math.PI, false);   // Boca (sentido horário)
    ctx.stroke();
};
function gerar() {
    document.getElementById("resultado").textContent =
        "⚡ Função de geração em construção...\nSeu painel está funcionando!";
}

// ------- animações -------
let canvas = document.getElementById("canvasAnim");
let ctx = canvas.getContext("2d");

function redimensionar() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
redimensionar();
window.onresize = redimensionar;

function animarImagem(src) {
    let img = new Image();
    img.src = src;

    let x = -300;
    let y = Math.random() * (canvas.height - 200);

    function loop() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage(img, x, y, 300, 150);
        x += 12;
        if (x < canvas.width) requestAnimationFrame(loop);
    }
    loop();
}

function avião() {
    animarImagem("https://i.imgur.com/l5vQF7R.png");
}

function carro() {
    animarImagem("https://i.imgur.com/j0J9Gi2.png");
}

function heli() {
    animarImagem("https://i.imgur.com/tp0yOfS.png");
}

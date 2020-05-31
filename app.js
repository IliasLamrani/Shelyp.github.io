const presentation = document.getElementById('presentation');
var step, inter;

step = 0;
inter = setInterval(presentationAnimation, 10);

function presentationAnimation() {
    step += 0.01;
    presentation.style.opacity = step;
    if (step >= 1)
        clearInterval(inter);
}
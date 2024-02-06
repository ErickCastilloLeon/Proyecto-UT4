document.getElementById('left-container').addEventListener('mouseenter', function() {
    this.style.backgroundImage = 'url("/img/Main_Mode/3.png")';
    this.style.filter = 'brightness(50%)';
    document.getElementById('left-text').style.textShadow = '0 0 10px white';
});

document.getElementById('left-container').addEventListener('mouseleave', function() {
    this.style.backgroundImage = 'none';
    this.style.filter = 'brightness(100%)';
    document.getElementById('left-text').style.textShadow = 'none';
});

document.getElementById('left-container').addEventListener('click', function() {
    window.location.href = 'Main_Spanish.html';
});

//
document.getElementById('right-container').addEventListener('mouseenter', function() {
    this.style.backgroundImage = 'url("/img/Main_Mode/3.png")';
    this.style.filter = 'brightness(50%)';
    document.getElementById('right-text').style.textShadow = '0 0 10px black';
});

document.getElementById('right-container').addEventListener('mouseleave', function() {
    this.style.backgroundImage = 'none';
    this.style.filter = 'brightness(100%)';
    document.getElementById('right-text').style.textShadow = 'none';
});

document.getElementById('right-container').addEventListener('click', function() {
    window.location.href = 'Main_Spanish.html';
});
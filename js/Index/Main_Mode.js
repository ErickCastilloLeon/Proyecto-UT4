/* Este seria el borrador */
document.getElementById('left-container').addEventListener('mouseenter', function() {
    this.style.backgroundImage = 'url("https://media1.tenor.com/m/-9lHctoXbJkAAAAC/toothless-toothless-dragon.gif")';
    this.style.filter = 'brightness(50%)';
    document.getElementById('left-text').style.color = '0 0 10px white'; // (Almenos lo intento )
});

document.getElementById('left-container').addEventListener('mouseleave', function() {
    this.style.backgroundImage = 'none';
    this.style.filter = 'brightness(100%)';
    document.getElementById('left-text').style.textShadow = 'none';
});

document.getElementById('left-container').addEventListener('click', function() {
    window.location.href = 'Es_Mode/Es_Mode.html';
});

// Event listener for the right container
document.getElementById('right-container').addEventListener('mouseenter', function() {
    this.style.backgroundImage = 'url("https://media1.tenor.com/m/-9lHctoXbJkAAAAC/toothless-toothless-dragon.gif")';
    this.style.filter = 'brightness(50%)';
    document.getElementById('right-text').style.textShadow = '0 0 10px black';
});

document.getElementById('right-container').addEventListener('mouseleave', function() {
    this.style.backgroundImage = 'none';
    this.style.filter = 'brightness(100%)';
    document.getElementById('right-text').style.textShadow = 'none';
});

document.getElementById('right-container').addEventListener('click', function() {
    window.location.href = 'En_Mode/En_Mode.html';
});
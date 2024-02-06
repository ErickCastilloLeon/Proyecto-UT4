/* Este seria el borrador */
document.getElementById('left-container').addEventListener('mouseenter', function() {
    this.style.backgroundImage = 'url("11.png")';
    this.style.filter = 'brightness(50%)';
    document.getElementById('left-text').style.textShadow = '0 0 10px white';
});

document.getElementById('left-container').addEventListener('mouseleave', function() {
    this.style.backgroundImage = 'none';
    this.style.filter = 'brightness(100%)';
    document.getElementById('left-text').style.textShadow = 'none';
});

document.getElementById('left-container').addEventListener('click', function() {
    window.location.href = 'English_Main.html';
});

// Event listener for the right container
document.getElementById('right-container').addEventListener('mouseenter', function() {
    this.style.backgroundImage = 'url("11.png")';
    this.style.filter = 'brightness(50%)';
    document.getElementById('right-text').style.textShadow = '0 0 10px black';
});

document.getElementById('right-container').addEventListener('mouseleave', function() {
    this.style.backgroundImage = 'none';
    this.style.filter = 'brightness(100%)';
    document.getElementById('right-text').style.textShadow = 'none';
});

document.getElementById('right-container').addEventListener('click', function() {
    window.location.href = 'Spanish_Main.html';
});
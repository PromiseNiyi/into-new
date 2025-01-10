const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

function showPopup() {
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}
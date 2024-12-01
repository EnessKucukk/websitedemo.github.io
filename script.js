// CV Popup açma ve kapatma
document.getElementById('moreInfoButton').addEventListener('click', function () {
    document.getElementById('cvPopup').classList.remove('hidden');
});

document.getElementById('closeCvPopup').addEventListener('click', function () {
    document.getElementById('cvPopup').classList.add('hidden');
});

// Email Popup açma ve kapatma
document.getElementById('contactButton').addEventListener('click', function () {
    document.getElementById('emailPopup').classList.remove('hidden');
});

document.getElementById('closeEmailPopup').addEventListener('click', function () {
    document.getElementById('emailPopup').classList.add('hidden');
});

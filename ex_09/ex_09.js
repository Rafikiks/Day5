document.addEventListener('DOMContentLoaded', function() {
    let yellowCarre = document.querySelector('.ex_09 div:last-child');
    let weightDisplay = document.querySelector('.ex_09 div:nth-child(2)');
    let weight = 1;
    let waterVolume = 10; 
    let waterDensity = 1; 
    let carreVolume = 10;
    let maxWeight = waterDensity * carreVolume; 
    let initialTop = 280;
    let minTop = initialTop;
    let maxTop = 1150; 
    function updatePosition() {
        let proportion = weight / maxWeight;
        if (proportion > 1) {
            proportion = 1; 
        }
        let newTop = minTop + proportion * (maxTop - minTop);
        yellowCarre.style.top = newTop + 'px';
    }
    function updateWeightDisplay() {
        weightDisplay.innerHTML = weight + ' kg';
    }
    updatePosition();
    updateWeightDisplay();
    yellowCarre.addEventListener('click', function() {
        weight += 1;
        updatePosition();
        updateWeightDisplay();
    });
});
// Attend que le DOM soit chargé, puis met à jour la position d'un carré jaune et l'affichage du poids
// à chaque clic, en vérifiant d'abord que les éléments nécessaires existent dans la page.

const getCartButton = document.querySelector('.cart-btn');
    getCartButton.innerHTML = 'CHANGECOLOR';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random()* 16)];
    }
        return color;
}
getCartButton.onclick = function(){
    document.body.style.backgroundColor = getRandomColor();
};



// Change le texte du bouton avec la classe "cart-btn" à "CHANGECOLOR".

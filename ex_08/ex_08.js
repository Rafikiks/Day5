 const exclusiveTag = document.querySelector('#tag');
    exclusiveTag.remove();

const productNameElement = document.getElementById('productName');
    productNameElement.textContent = "Samsung 22";

const paragraphs = document.querySelectorAll('#description p');
    paragraphs[0].innerHTML = 'Never miss that perfect shot again.';
    paragraphs[1].innerHTML = 'Designed to revolutionise video and photography, with beyond cinematic 16K resolution.';
    paragraphs[2].innerHTML = 'Get yours now !';

let price = document.getElementById('price');
    price.innerHTML = '890 €';

document.querySelector('img').src = 'Samsung22.png'

const addToCartButton = document.querySelector('.cart-btn');
let cartCount = 0;
const cartCountDisplay = document.createElement('p');
    cartCountDisplay.id = 'cartCount';
    cartCountDisplay.textContent = `In cart: ${cartCount}`;
    cartCountDisplay.style.fontSize = '20px';
    cartCountDisplay.style.fontWeight = 'bold';
    cartCountDisplay.style.color = '#333';
    addToCartButton.parentNode.insertBefore(cartCountDisplay, addToCartButton.nextSibling);
    addToCartButton.addEventListener('click', function() {
    cartCount++;
    cartCountDisplay.textContent = `In cart: ${cartCount}`;
});





// Supprime un élément, modifie le nom du produit, met à jour les paragraphes de description et le prix, 

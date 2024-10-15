//carrito
document.addEventListener('DOMContentLoaded', () => {
    const btnCart = document.querySelector('.carrito')
    const containerCartsProducts = document.querySelector('.contenedor-cart-product')

    btnCart.addEventListener('click', () => {
        containerCartsProducts.classList.toggle('.hidden-cart')
    });
});
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Este codigo se encuentra dentro del html ya que solo se trata de una pequeña parte de codigo, pero tome la decision de separarlo en github para poder ver solo el codigo 
perteneciente a javascript.

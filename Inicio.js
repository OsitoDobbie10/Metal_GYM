const boton = document.querySelector('.menu-btn');

//registrar evento click
boton.addEventListener('click',()=>{
    document.querySelector('.header-menu').classList.toggle('show'); //toggle nos permite poner como quitar la clase 
}); 



ScrollReveal().reveal('.encabezado',{delay:3000});
ScrollReveal().reveal('.redes1',{delay:2000});
ScrollReveal().reveal('.servcicios',{delay:3000});
ScrollReveal().reveal('.contenedor',{delay:3000});
ScrollReveal().reveal('.row-contenedor',{delay:3000});
ScrollReveal().reveal('.img1',{delay:3000});
ScrollReveal().reveal('.publicidad',{delay:3000});
ScrollReveal().reveal('.imagen',{delay:3000});
ScrollReveal().reveal('.precios',{delay:4000});

ScrollReveal().reveal('.mapa1',{delay:4000});
ScrollReveal().reveal('.mapa2',{delay:5000});
ScrollReveal().reveal('.footer_container',{delay:3000});
ScrollReveal().reveal('.data1',{delay:3000});



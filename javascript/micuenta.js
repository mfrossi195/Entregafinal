const boton = document.getElementById("boton");
boton.addEventListener('mouseover' , function(){
    boton.style.backgroundColor = '#C2DDBA'
}
)
boton.addEventListener('mouseout', () => {
    boton.style.backgroundColor = '#45585D';
    });

const botonc = document.getElementById("EnviarC");
botonc.addEventListener('mouseover' , function(){
    botonc.style.backgroundColor = '#C86F66'
}
)
botonc.addEventListener('mouseout', () => {
    botonc.style.backgroundColor = '#45585D';
    });


const inputs = document.querySelectorAll('.formulario input');


inputs.forEach(input => {
    input.addEventListener('focus', () => {
    input.style.backgroundColor = '#C86F66'; 
    });

    input.addEventListener('blur', () => {
        input.style.backgroundColor = ''; 
        });
    });
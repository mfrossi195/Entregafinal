
let nombreusuario = prompt ("Por favor ingrese su nombre:");

let nacimiento = Number (prompt ("¿En que año naciste?:"));

let edad = 2024 - nacimiento 

console.log(edad)


alert ("Hola " + nombreusuario  + " .En tus " + edad + " años " + "nunca viste algo igual" + " ¡Bienvenidx a Germina Tejidos!")


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
    botonc.style.backgroundColor = '#C2DDBA'
}
)
botonc.addEventListener('mouseout', () => {
    botonc.style.backgroundColor = '#45585D';
    });


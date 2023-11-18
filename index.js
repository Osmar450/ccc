//     indice      condicional   incremento

for (let index = 1; index < 6; index++) {
    if(index == 3){
        break;
    }
    console.log(index);
}

console.log("TERMINO")

//funciones

function suma(){
    let x = parseInt(document.getElementById("n1").value); 
    let y = parseInt(document.getElementById("n2").value);
    let resultado = x + y; 
    document.getElementById("resultado").innerHTML = resultado;
}

function resta(){
    let x = parseInt(document.getElementById("n1").value); 
    let y = parseInt(document.getElementById("n2").value);
    let resultado = x - y; 
    document.getElementById("resultado").innerHTML = resultado;
}

function multiplicacion(){
    let x = parseInt(document.getElementById("n1").value); 
    let y = parseInt(document.getElementById("n2").value);
    let resultado = x * y; 
    document.getElementById("resultado").innerHTML = resultado;
}

function division(){
    let x = parseInt(document.getElementById("n1").value); 
    let y = parseInt(document.getElementById("n2").value);
    let resultado = x / y; 
    document.getElementById("resultado").innerHTML = resultado;
}
{
let boton = document.querySelector(".botonclick");
//eventos del mouse
//evento click 
boton.addEventListener("click",function(){console.log("dimos click en el boton")});
boton.classlist.toggle("verde");
}
boton.addEventListener("mouseout",function(){console.log("sali del boton");

})
 //EVENTOS EN EL TECLADO


const botonAgregar = document.getElementById("agregar");
const botonLimpiar = document.getElementById("limpiar");
const ul = document.getElementById("contenedor");
const input = document.getElementById("item");

botonAgregar.addEventListener("click", guardar);
botonLimpiar.addEventListener("click", limpiar);
const array = [];
const arrayJSON = JSON.stringify(array);
localStorage.setItem("li", arrayJSON);

function guardar (){
    
    const traigoJSON = localStorage.getItem("li");
    if(input.value === "" && input.value === " "){
        alert("complete el campo");
    }else{
        if(traigoJSON){
        const arrayJSONActualizado = JSON.parse(traigoJSON)
        arrayJSONActualizado.push(input.value);

        ul.innerHTML = "";
        for(let i = 0; i< arrayJSONActualizado.length; i++){
            let li = document.createElement("li");
            li.innerHTML = arrayJSONActualizado[i];
            ul.appendChild(li);
        }
        const devolver = JSON.stringify(arrayJSONActualizado)
        localStorage.setItem("li", devolver);
        }
    }
    input.value = "";
    input.focus();
}

function limpiar(){
    const arrayLimpio = [];
    const limpioJSON = JSON.stringify(arrayLimpio);
    localStorage.setItem("li", limpioJSON);
    ul.innerHTML = "";
    input.value = "";
    input.focus();


}
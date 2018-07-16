//Configuracion inicial de botones de Cargar generaciones los desabilita al entrar ala pantalla

document.getElementById("lima").disabled = true;
document.getElementById("mexico").disabled = true;
document.getElementById("santiago").disabled = true;

// Crea las funciones de cada sede aqui le digo que al darle clic desabilite las otras dos  ejm  desabilitar cdmx santi y mando llamar la función de abajo

document.getElementById('Slima').addEventListener("click",descdmxysan);
document.getElementById('Scdmx').addEventListener("click",deslimaysan);
document.getElementById('Ssan').addEventListener("click",deslimaycdmx);

// esta funcion me lleva a cargar tabla que esta hasta abajo

document.getElementById('lima').addEventListener("click",cargartabla);
document.getElementById('mexico').addEventListener("click",cargartabla);
document.getElementById('santiago').addEventListener("click",cargartabla);

document.getElementById("tablageneracion").style.display = "none";
function mostrargen(){
  document.getElementById("tablaestudiante").style.display = "none";
  document.getElementById("tablageneracion").style.display = "block";
}

document.getElementById("tablaestudiante").style.display = "none";
function mostrarest(){
  document.getElementById("tablageneracion").style.display = "none";
  document.getElementById("tablaestudiante").style.display = "block";
}
// Crea las funciones de cada sede aqui le digo que al darle clic desabilite las otras dos  ejm  desabilitar cdmx santi
// función

function descdmxysan(){
  document.getElementById("lima").disabled = false;
  document.getElementById("Scdmx").disabled = "true";
  document.getElementById("Ssan").disabled = "true";
}

function deslimaysan(){
  document.getElementById("mexico").disabled = false;
  document.getElementById("Slima").disabled = "true";
  document.getElementById("Ssan").disabled = "true";
}

function deslimaycdmx(){
  document.getElementById("santiago").disabled = false;
  document.getElementById("Scdmx").disabled = "true";
  document.getElementById("Slima").disabled = "true";
}

function cargartabla() {
data.cargandoDatos();
}
//codigo dos
const printInf = students =>{
  //console.log(students);
}
const printSerch = student =>{
  document.getElementById('search').addEventListener('click',(event) =>{
    event.preventDefault();
        const name = document.getElementById('name-to-search').value;
        const searchResult = filtrerStudet(student,name);
    //para imprrimir en el dom
    console.log(searchResult);
    let result = '';
    if (searchResult.length ===0){
      document.getElementById('no_result').innerHTML = '<p>no existe alumna</p>';
    }
    searchResult.forEach((element , i) => {
      result +=`<tr>
        <th scope= row>${i+1}</th>
        <td>${element.name}</td>
        <td>${element.generacion}</td>
        <td>${element.email}</td>
        <td>${element.stats.completedPerentage}</td>
        <td>${element.stats.status}</td>
        <td>${element.turn}</td>
      </tr>`
    })
    document.getElementById('no-result').innerHTML = '';
    document.getElementById('table-body').innerHTML = result;
  })
}

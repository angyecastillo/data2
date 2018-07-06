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

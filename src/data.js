window.data = {

  cargandoDatos:() => {

    let laboratoria = fetch('https://raw.githubusercontent.com/zabarca/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json');

    if(formulario.terceralim.checked == true){
    data.computeStudentsStats(laboratoria);
    }

    if(formulario.cuartalim.checked == true){
    data.computeStudentsStats1(laboratoria);
    }

    if(formulario.quintalim.checked == true){
    data.computeStudentsStats2(laboratoria);
    }

    if(formulario.terceracdmx.checked == true){
    data.computeStudentsStats3(laboratoria);
    }

    if(formulario.cuartacdmx.checked == true){
    data.computeStudentsStats4(laboratoria);
    }

    if(formulario.quintacdmx.checked == true){
    data.computeStudentsStats5(laboratoria);
    }

    if(formulario.tercerasan.checked == true){
    data.computeStudentsStats6(laboratoria);
    }

    if(formulario.cuartasan.checked == true){
    data.computeStudentsStats7(laboratoria);
    }

    if(formulario.quintasan.checked == true){
    data.computeStudentsStats8(laboratoria);
    }
  },



    computeStudentsStats: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data)
            {
                let obtenidos = data.lima.generacion.tercera.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                    contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });

                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
              })
    },

    computeStudentsStats1: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
           })
            .then(function(data)
            {
                let obtenidos = data.lima.generacion.cuarta.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                    contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
          })
    },

    computeStudentsStats2: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data)
            {
                let obtenidos = data.lima.generacion.quinta.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                    contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
          })
    },
    computeStudentsStats3: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data)
            {
                let obtenidos = data.mexico.generacion.tercera.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                    contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
              })
    },


    computeStudentsStats4: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data)
            {
                let obtenidos = data.mexico.generacion.cuarta.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                    contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
              })
    },
    computeStudentsStats5: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data)
            {
                let obtenidos = data.mexico.generacion.quinta.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                    contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
              })
    },
    computeStudentsStats6: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data)
           {
                let obtenidos = data.santiago.generacion.tercera.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                   contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
              })
    },

    computeStudentsStats7: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data)
            {
                let obtenidos = data.santiago.generacion.cuarta.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                    contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
              })
    },
    computeStudentsStats8: (laboratoria) => {
            laboratoria.then(function(res){
                return res.json();
            })
            .then(function(data)
            {
                let obtenidos = data.santiago.generacion.quinta.estudiantes
                let contenedor = '';
                obtenidos.forEach(element => {
                    contenedor += `<table style="width:100%" border = 2px><tr>`;
                    contenedor += `<td width = 230 px>${element.nombre}</td>`;
                    contenedor += `<td width = 210 px>${element.correo}</td>`;
                    contenedor += `<td width = 58 px align = center>${element.turno}</td>`;
                    contenedor += `<td width = 65 px align = center>${element.progreso.duracionPrograma}</td>`;
                    contenedor += `<td width = 75 px align = center>${element.progreso.porcentajeCompletado}</td>`;
                    contenedor += `</tr></table>`;
                });
                let retornados = JSON.stringify(contenedor);
                let result =  document.getElementById("resultado");
                result.insertAdjacentHTML("beforeEnd", contenedor)
              })
    },

    computeGenerationsStats: () => {
    },
    sortStudents: () => {
    },
    filterStudents: () => {
    }
}
              prueba= (event)=>{
              console.log(event.target.value);
  }

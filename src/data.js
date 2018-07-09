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
//codigo dos
  const url = 'https://raw.githubusercontent.com/zabarca/cdmx-2018-06-bc-core-am-data-dashboard/master/data/laboratoria.json'
  window.getData = ()=>{
    fetch (url)
    .then(result => result.json())
    .then (result=>{
      const students = computeStudentStas(result);
      printInf(students);
      printSerch(students);
      // aqui le estoy diciendo a compustuden que es funcion gobal
      // que me la traiga y yo la renombro en vez de resul la pongo como laboratoria
    })
  }
  window.addstats = progress =>{
    //console.log(progress);
    let stats = {};
    let topicsArrays = progress.temas;

    // asi dejmos la escructura del archivo  ya que teniamos todos los subtemas  asi lo los renombramos
    stats.topics = topicsArrays;
    //para acceder a porcentaje completado
    stats.completedPerentage = progress.porcentajeCompletado;

    //console.log(stats);
    if (progress.porcentajeCompletado < 60) {
      stats.status = 'Bajo';
      }
      //console.log(stats);
      if (progress.porcentajeCompletado > 60 && progress.porcentajeCompletado < 90 ) {
        stats.status = 'Medio';
        }
        else {
          stats.status = 'Alto';
          //console.log(stats);
        }
        //console.log(stats);
        let properties = Object.values(progress.temas);
        //console.log(properties);
        properties.forEach(content =>{
          //console.log(content.porcentajeCompletado);
          content.completedPerentage = content.porcentajeCompletado;
          //crear una nueva pro k se llame presentash duration y asignarle el porcentaje de tiempo invertido segun la duracion ind de cada tema
      content.percentageDuration = Math.round((content.duracionTemaCompletado*100)/content.duracionTema);
        let subTopicArrays = content.subtemas;
        let subProperties = Object.values(subTopicArrays);
        subProperties.forEach(subCont =>{
          subCont.type = subCont.tipo;
          subCont.duration = subCont.duracionSubtema;
          if (subCont.completado ===1){
          subCont.completedPerentage = 100;
          }
          else {
            subCont.completedPerentage = 0;
          }
  })
        })
  return stats;
  console.log(stats);
  }
  window.computeStudentStas = (laboratoria) =>{
    let campus = '';
    let generationArray = '';
    let studentArray = [];
    let i = 0;
    let j = 0;

    campus = Object.keys(laboratoria);

    generationArray = Object.values(laboratoria);
    //aqui element es la palabra que esta fediniendo el nivel al que estoy entrando
    // element va a ir vicitando cada uno de los deptos
    generationArray.forEach(element =>{
      let allGenerations = '';
      // aqui le estoy diciendo que quiero ver el nombre de las gen en este caso tercera cuarta quinta
      allGenerations = Object.keys(element.generacion);
      allGenerationsContent = Object.values(element.generacion)
      //console.log(allGenerationsContent);
      j=0;
      allGenerationsContent.forEach(student => {
                //  console.log(student.estudiantes); ahora la hago variable
        let students = student.estudiantes;
          students.forEach(infoEstudent => {
          //  console.log(infoEstudent.nombre); aki ya entramos podemos ver su nombre o correo ec.
          //add estas va a ser aggregando estatutos Y LA PONGO AKI pork al llegar aki se regresa arriba a buscar
             let stats = addstats (infoEstudent.progreso);
              studentArray.push({
               'campus':campus[i],
               'generacion':allGenerations[j],
               'name':infoEstudent.nombre,
               'email': infoEstudent.correo,
               'turn':infoEstudent.turno,
               'stats':stats

          })
          i++
          })
        j++
      })
    })

  //console.log(studentArray);
    return studentArray;
  }
  window.filtrerStudet = (student,search) =>{
    let searchResult = [];
    student.forEach(element =>{
      if(element.name.indexOf(search)!= -1){
        searchResult.push(element);
      }
    //console.log(element);
    })
  return searchResult;
  }

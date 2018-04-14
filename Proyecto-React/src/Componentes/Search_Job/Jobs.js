import axios from 'axios';

    const get_Jobs =  (metodo,referencia) => {
    var uri = window.encodeURI('https://jobs.github.com/positions.json');
    axios.get(uri)
        .then(function (response) {
            
            console.log(response.data); //Datos de la respuesta
            console.log(response.status); //Estatus
            console.log(response.statusText); //Mensaje del estatus
            console.log(response.headers); // Encabezados
            alert("hola"+response.data);
            metodo(response.data,referencia);
         

        });
 } 

export default get_Jobs;

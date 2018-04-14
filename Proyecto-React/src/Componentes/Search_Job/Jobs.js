import axios from 'axios';

export function get_Jobs() {
    var datos = [];
    axios.get('https://jobs.github.com/positions.json')
        .then(function (response) {
            datos = response.data;
            /*console.log(datos); //Datos de la respuesta
            console.log(response.status); //Estatus
            console.log(response.statusText); //Mensaje del estatus
            console.log(response.headers); // Encabezados*/
        })
        .catch(function (error) {
            /*console.log(error.response); //Objeto respuesta
            console.log(error.response.data); // Respuesta del servidor
            console.log(error.response.status); //Código de error
            console.log(error.response.statusText); //Mensaje del error*/
        });

    return datos;
}

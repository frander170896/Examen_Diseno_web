const get_Jobs = () => {
    axios({
        url: 'https://api.mlab.com/api/1/databases/lab-contact-form/collections/contacts?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb', //Endpoint
        method: 'GET',  //Método
        timeout: 3000,  //Tiempo máximo de espera
        headers: {
            'Content-Type': 'application/json'
        }
        }).then(function (response) {
           //Si todo OK te imprime la respuesta
           console.log(response.data); //Datos de la respuesta
           console.log(response.status); //Estatus
           console.log(response.statusText); //Mensaje del estatus
           console.log(response.headers); // Encabezados
        }).catch(function (error) {
           //Si hay error el catch lo imprime
           console.log(error.response); //Objeto respuesta
           console.log(error.response.data); // Respuesta del servidor
           console.log(error.response.status); //Código de error
           console.log(error.response.statusText); //Mensaje del error
       });
}

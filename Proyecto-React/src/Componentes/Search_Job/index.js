import React, { Component } from 'react';
import LateralFilter from './Lateral_Filter';
import JobList from './JobList.js';
import axios from 'axios';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            Jobs: 0
        }
        this.get_Jobs();
        console.log(this.get_Jobs());
    }
    get_Jobs() {
        var datos = [];
        axios.get('https://jobs.github.com/positions.json')
        .then(res => this.setState({ Jobs: res.data }))
           /* .then(function (response) {
                datos = response.data;
                //console.log(datos);
                /*console.log(datos); //Datos de la respuesta
                console.log(response.status); //Estatus
                console.log(response.statusText); //Mensaje del estatus
                console.log(response.headers); // Encabezados
                return datos;
            })*/
        .catch(function (error) {
            /*console.log(error.response); //Objeto respuesta
            console.log(error.response.data); // Respuesta del servidor
            console.log(error.response.status); //Código de error
            console.log(error.response.statusText); //Mensaje del error*/
        });
        
        
    }
   /* get_jobs() {

        const posts = [
            { jobtitle: 'SENIOR JAVA DEVELOPER', title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ];
        /*
         <JobItem jobtitle={'SENIOR JAVA DEVELOPER'} job_description='Requires experience, minimum 30 year working on full time'
                            company_url={'http://www.google.com'} 
                            company_logo={"https://9to5mac.files.wordpress.com/2018/02/logo.jpg?quality=82&strip=all&w=1500"}
                            job_type={'Full time'}
                            company_description='Description: We are improving...'
                            />
        

        return posts;
}*/

    render() {
        return (
            <div className="container">
                <div className="row search">

                </div>
                <div className="row jobs">

                    <div className="col-ms-12 col-md-3 col-lg-3" >
                        <LateralFilter></LateralFilter>
                    </div>
                    <div className="col-ms-12 col-md-9 col-lg-9" >
                        {/*<JobList job_list={this.state.jobs} />*/}
                    </div>
                </div>
            </div>
        );
    }
}


export default Search;
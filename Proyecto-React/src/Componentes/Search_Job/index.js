import React, { Component } from 'react';
import LateralFilter from './Lateral_Filter';
import JobList from './JobList.js';
import axios from 'axios';
import get_Jobs from './Jobs';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            jobs: null
        }
        this.componentDidMount = this.componentDidMount.bind(this);
       
    }
    cambiaEstado(datos,referencia){
       
        referencia.setState({
            jobs: datos
        });
      
    }
    componentDidMount(){
        const prueba = get_Jobs(this.cambiaEstado,this); 
    }

    render() {
        return (
            <div className="container">
            <div className="row search">

            </div>
            <div className="row jobs">

                <div className="col-ms-12 col-md-3 col-lg-3" >
                {!this.state.jobs?'Loading':<LateralFilter job_list={this.state.jobs}></LateralFilter>}
                </div>
                <div className="col-ms-12 col-md-9 col-lg-9" >
                    {!this.state.jobs?'Loading':<JobList job_list={this.state.jobs} />}
                </div>
            </div>
        </div>
        );
    }
}


export default Search;
import React, { Component } from 'react';

import axios from 'axios';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import get_Jobs from './Jobs';
import JobList from './JobList.js';
import JobDetail from './JobDetail';

class CompanyLogo extends Component {
    render() {
        return (
            <img src={this.props.company_logo} className="img-thumbnail" alt="company" />
        );
    }
}

class ApplyLink extends Component {
    render() {
        return (
            <a className='active btn btn-link' href={this.props.company_url}>
                {this.props.action_name}
            </a>
        );
    }
}

class JobItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobtitle: 'JOB TITLE',
            job_description: 'JOB DESCRIPTION',
            company_logo: "../Global/icons/reunion.png",
            company_url: 'http://www.google.com',
            job_type: 'Full time',
            company_description: 'We are improving',
            created_at: null,
            how_to_apply: 'Email us!',
            show: false
        };
        this.handleShow=this.handleShow.bind(this);
    }
    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return (
            <div className="card border-success">
               {this.state.show?<JobDetail show={this.state.show}  visible={this.state.show} company_url={this.props.company_url} company_description={this.props.company_description} how_to_apply={this.props.how_to_apply} company_logo={this.props.company_logo} jobtitle={this.props.jobtitle} description={this.props.job_description}/>:''}
                <div className="card border-success">
                    <div className="card-body">
                        <h2 className="card-title">{this.props.jobtitle}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">About the job</h3>
                        <p>
                            <i><strong>Job Type:  </strong> {this.props.job_type}</i>

                        </p>
                    
                        <p className="card-text">{this.props.created_at}</p>


                        <button className="btn btn-primary" onClick={this.handleShow}>View Job and apply</button>

                        <p>
                            <ApplyLink company_url={this.props.company_url} action_name={'Go to companys page...'} />
                        </p>
                        <h3 className="card-subtitle mb-2 text-muted">About the company</h3>
                        <h4>{this.props.company}</h4>
                        <CompanyLogo company_logo={this.props.company_logo} />
                        <p>
                            <i>{this.props.company_description}
                                <ApplyLink company_url={this.props.company_url} action_name={'Visit Us'} />
                            </i>
                        </p>
                        <div className="card-footer"></div>
                    </div>
                </div>

            </div>
        );
    }

}
class InputDate extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event, dato) {
        this.props.mPadre(event, dato);
    }
    render() {
        return (
            <div>
                <label className=" col-form-label">{this.props.Lnombre}</label>
                <div className="form-group">
                    <input className="form-control" onChange={(event) => { this.handleChange(event, 1) }} type="text" />
                </div>
            </div>
        );
    }
}
class SelectOptionUb extends Component {
    constructor(props) {
        super(props);
        this.handlerOnChange = this.handlerOnChange.bind(this);

    }
    handlerOnChange(item) {
        //  var mpadre = this.props.mpadre;
        // mpadre(item);
        // console.log(referencia);
    }
    render() {
        return (
            <option
                onClick={() => { this.handlerOnChange(this.props.text) }}
                value={this.props.value}>
                {this.props.text}
            </option>
        );
    }
}

class SelectOptionEmp extends Component {
    render() {
        return (
            <option value={this.props.value}>{this.props.text}</option>
        );
    }
}
class SelectEmpresa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datos: this.eliminaDuplicadosUbicacion(this.props.values)
        }
    }
    contains = (a, obj) => {
        var i = a.length;
        while (i--) {
            if (a[i].company === obj) {
                return true;
            }
        }
        return false;
    }
    eliminaDuplicadosUbicacion = (array) => {
        var resultado = [];
        var i;
        for (i = 0; i < array.length; i++) {
            if (!this.contains(resultado, array[i].company)) {
                resultado.push(array[i]);
            }
        }
        return resultado;
    }
    render() {
        return (
            <div>
                <label>{this.props.Lnombre}</label>
                <select className="custom-select" >
                    {this.state.datos && this.state.datos.map((item, key) =>
                        <SelectOptionEmp key={item.id} value={item.id} text={item.company}></SelectOptionEmp>)}
                </select>
            </div>
        );
    }
}
class SelectUbicacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empresas: this.eliminaDuplicadosEmpresa(this.props.values),
            datos: this.eliminaDuplicadosUbicacion(this.props.values),
            todos_trabajos: this.props.values
        }
        this.handlerOnChange = this.handlerOnChange.bind(this);
        this.eliminaDuplicadosUbicacion = this.eliminaDuplicadosUbicacion.bind(this);
        this.eliminaDuplicadosEmpresa = this.eliminaDuplicadosEmpresa.bind(this);

    }


    containsEmpresa = (a, obj) => {
        var i = a.length;
        while (i--) {
            if (a[i].company === obj) {
                return true;
            }
        }
        return false;
    }
    eliminaDuplicadosEmpresa = (array) => {
        var resultado = [];
        var i;
        for (i = 0; i < array.length; i++) {
            if (!this.containsEmpresa(resultado, array[i].company)) {
                resultado.push(array[i]);
            }
        }
        return resultado;
    }



    contains = (a, obj) => {
        var i = a.length;
        while (i--) {
            if (a[i].location === obj) {
                return true;
            }
        }
        return false;
    }
    eliminaDuplicadosUbicacion = (array) => {

        var resultado = [];
        var i;
        for (i = 0; i < array.length; i++) {
            if (!this.contains(resultado, array[i].location)) {
                resultado.push(array[i]);
            }
        }

        return resultado;
    }
    filtrarCiudad = (array, ciudad) => {
        var resultado = [];
        var i;
        for (i = 0; i < array.length; i++) {
            array[i].location === ciudad ? resultado.push(array[i]) : 0;

        }

        return resultado;
    }

    handlerOnChange(item) {
        var self = this;
        /*const cfiltradas = referencia.filtrarCiudad(referencia.state.todos_trabajos, item);
        */
        if (item === 'All') {
            self.setState({
                empresas: self.eliminaDuplicadosEmpresa(self.state.todos_trabajos)
            });
        } else {
            self.setState({
                empresas: self.filtrarCiudad(self.state.todos_trabajos, item)
            });
        }
    }
    handleChange(event, dato) {
        this.props.mPadre(event, dato);
    }
    render() {
        return (
            <div>
                <label>{this.props.Lnombre}</label>
                <select className="custom-select" onChange={(event) => { this.handleChange(event, 2) }}>
                    <option onClick={() => { this.handlerOnChange('All') }} value='All'>All</option>
                    {this.state.datos && this.state.datos.map((item, key) =>
                        <option key={item.id}
                            onClick={() => { this.handlerOnChange(item.location) }}
                            value={item.location}>
                            {item.location}
                        </option>
                    )}
                </select>
                <label>Company Name:</label>
                <select className="custom-select" onChange={(event) => { this.handleChange(event, 3) }} >
                    {this.state.empresas ?
                        //  <SelectEmpresa Lnombre="Empresa" values={this.state.empresas}></SelectEmpresa>                  
                        this.state.empresas.map((item2, key) =>
                            <SelectOptionEmp key={item2.id} value={item2.company} text={item2.company}></SelectOptionEmp>
                        ) : <option disable value='None'>None</option>
                    }
                </select>
            </div>
        );
    }
}

class OpcionesRadio extends Component {
    render() {
        return (// seria bueno agregarle acciones a las opciones para que filteren o para que llenen los otros filtros
            <div className="custom-control custom-radio">
                <input type="radio" id={this.props.value} name="customRadio" className="custom-control-input" />
                <label className="custom-control-label" >{this.props.text}</label>
            </div>
        );
    }
}
class Radio extends Component {
    render() {
        const items = this.props.values;
        return (
            <div>
                <label>{this.props.Lnombre}</label>
                <OpcionesRadio text={'Full Time'}></OpcionesRadio>
                <OpcionesRadio text={'Middle Time'}></OpcionesRadio>
            </div>
        );
    }
}
class LateralFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isfiltrado: false,
            jobs: null,
            datosFiltrados: null,
            fecha: "",
            ubicacion: "",
            empresa: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        this.filtrarSeleccion = this.filtrarSeleccion.bind(this);
    }
    filtrarSeleccion(array, valor) {
        var resultado = [];
        var i;
        for (i = 0; i < array.length; i++) {
            if (array[i].company === valor) {
                console.log(array[i].company);
                resultado.push(array[i]);
            }
        }

        return resultado;
    }

    handlerSubmit(event) {
        event.preventDefault();
        var tipo1 = document.getElementById('Radio1');
        var tipo2 = document.getElementById('Radio2');
        var tipo = false;
        if (tipo1.checked) {
            tipo = true;
        }
        // var fecha = this.state.fecha;
        // var ubicacion = this.state.ubicacion;
        // var empresa = this.state.empresa;
        var resultado = this.filtrarSeleccion(this.state.jobs, 'King');

        this.setState({
            isfiltrado: true,
            datosFiltrados: resultado
        });
        alert('filtrado metodo')
        console.log('Handler submit' + this.state.datosFiltrados);
    }
    handleChange(event, valor) {

        if (valor === 1) {
            var date = event.target.value;

            this.setState({
                fecha: date
            });
        } else if (valor === 2) {
            var location = event.target.value;
            this.setState({
                ubicacion: location
            });
            //  console.log(location);
        }
        else if (valor === 3) {
            var company = event.target.value;
            this.setState({
                empresa: company
            });
            // console.log(company);
        }
        event.preventDefault();

    }
    cambiaEstado(data, referencia) {

        referencia.setState({
            jobs: data
        });

    }
    componentDidMount() {
        const prueba = get_Jobs(this.cambiaEstado, this);
    }
    render() {
        return (
            <div className="row jobs">
                <div className="col-ms-6 col-md-3 col-lg-3" >
                    <form onSubmit={this.handlerSubmit}>
                        <InputDate Lnombre="Description"
                            mPadre={this.handleChange} >
                        </InputDate>
                        {this.state.jobs && !this.state.isfiltrado ? <SelectUbicacion
                            mPadre={this.handleChange}
                            Lnombre="Location"
                            values={this.state.jobs} />
                            : this.state.isfiltrado && this.state.datosFiltrados ?
                                <SelectUbicacion
                                    mPadre={this.handleChange}
                                    Lnombre="Location"
                                    values={this.state.datosFiltrados} />
                                : ''
                        }
                        <div className="custom-control custom-radio">
                            <input type="radio" id="Radio1" value="Full-Time" name="customRadio" className="custom-control-input" checked />
                            <label className="custom-control-label" for="customRadio1">Full-Time</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="Radio2" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" value="Middle-Time" for="customRadio2">Middle-Time</label>
                        </div>
                        <input type="submit" value="Filtrar" className="btn btn-primary" />
                    </form>
                </div>
                <div className="col-ms-6 col-md-9 col-lg-9 mt-3" >
                    <button onClick={this.handlerSubmit}> Click me</button>
                    {!this.state.jobs && !this.state.isfiltrado ?
                        <div className="alert alert-primary" role="alert">
                            <i><strong>Loading...</strong></i>
                        </div>
                        : !this.state.isfiltrado && !this.state.datosFiltrados ?
                            <JobList job_list={this.state.jobs} />
                            :
                            this.state.datosFiltrados.map(elemento => <div key={elemento.id}>
                                <JobItem jobtitle={elemento.title}
                                    job_type={elemento.type}
                                    job_description={elemento.description}
                                    created_at={elemento.created_at}
                                    how_to_apply={elemento.how_to_apply}
                                    company_logo={elemento.company_logo}
                                    company_url={elemento.company_url}
                                    company={elemento.company}
                                />
                            </div>
                            )

                    }
                </div>
            </div>
        );
    }

}

export default LateralFilter;
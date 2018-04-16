import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDate extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event,dato){
        this.props.mPadre(event,dato);
    }
    render() {
        return (
            <div>
                <label className=" col-form-label">{this.props.Lnombre}</label>
                <div className="form-group">
                    <input className="form-control" onChange={(event) =>{ this.handleChange(event,1) }} type="text" />
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
    handleChange(event,dato){
        this.props.mPadre(event,dato);
    }
    render() {
        return (
            <div>
                <label>{this.props.Lnombre}</label>
                <select className="custom-select" onChange={(event) =>{ this.handleChange(event,2) }}>
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
                <select className="custom-select" onChange={(event) =>{ this.handleChange(event,3) }} >
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
            datos: this.props.job_list,
            datosFiltrados:null,
            fecha:"",
            ubicacion:"",
            empresa :""
        }
        this.handleChange = this.handleChange.bind(this);
    }
    filtrarSeleccion(array,valor){
        var resultado = [];
        var i;
        for (i = 0; i < array.length; i++) {
            if (array[i].include(valor)) {
                resultado.push(array[i]);
            }
        }

        return resultado;
    }

    handlerSubmit(event){
        event.preventDefault();
        var tipo1 = document.getElementById('Radio1');
        var tipo2 = document.getElementById('Radio2');
        var tipo = false;
        if(tipo1.checked){
            tipo = true;
        }
        var fecha = this.state.fecha;
        var ubicacion =this.state.ubicacion;
        var empresa = this.state.empresa;

        var datos = this.state.datos;
        
        var resultado = this.filtrarSeleccion(datos,empresa);

        this.setState(()=>{
            datosFiltrados: resultado
        });

    }
    handleChange(event,valor){
        
        if(valor === 1){
            var date = event.target.value;
          
            this.setState({
                fecha : date
            });
        }else if(valor === 2){
            var location = event.target.value;
            this.setState({
                ubicacion : location
            });
            console.log(location);
        }
        else if(valor === 3){
            var company = event.target.value;
            this.setState({
                empresa : company
            });
            console.log(company);
        }  
        event.preventDefault();
        
    }

    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
                <InputDate Lnombre="Description" mPadre={ this.handleChange } ></InputDate>
                <SelectUbicacion mPadre={ this.handleChange } Lnombre="Location" values={this.state.datos}></SelectUbicacion>
                <div className="custom-control custom-radio">
                    <input type="radio" id="Radio1" value ="Full-Time" name="customRadio" className="custom-control-input" checked />
                    <label className="custom-control-label" for="customRadio1">Full-Time</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="Radio2" name="customRadio" className="custom-control-input" />
                    <label className="custom-control-label" value="Middle-Time" for="customRadio2">Middle-Time</label>
                </div>
                <input type="submit" value="Filtrar" className="btn btn-primary"></input>

            </form>
        );
    }

}

export default LateralFilter;
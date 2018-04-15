import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDate extends Component {
    render() {
        return (
            <div>
                <label className=" col-form-label">{this.props.Lnombre}</label>
                <div className="form-group">
                    <input className="form-control" type="date" />
                </div>
            </div>
        );
    }
}
class SelectOptionUb extends Component {
    constructor(props) {
        super(props);
        this.handlerOnChange=this.handlerOnChange.bind(this);
    }
    handlerOnChange(item) {
        var mpadre = this.props.mpadre;
        mpadre(item);
    }
    render() {
        return (
            <option onClick={() => { this.handlerOnChange(this.props.text) }} value={this.props.value}>{this.props.text}</option>
        );
    }
}

class SelectOptionEmp extends Component {
    render() {
        return (
            <option disabled value={this.props.value}>{this.props.text}</option>
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
            datos: this.eliminaDuplicadosUbicacion(this.props.values),
            empresas:[],
            todos_trabajos:this.props.values
        }
        this.handlerOnChange=this.handlerOnChange.bind(this);
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

    containsCiudad = (a, obj) => {
        var i = a.length;
        while (i--) {
            if (a[i].location === obj) {
                return true;
            }
        }
        return false;
    }

    filtrarCiudad = (array, ciudad) => {
        var resultado = [];
        var i;
        for (i = 0; i < array.length; i++) {
            if (!this.containsCiudad(resultado, array[i].location)) {
                resultado.push(array[i]);
            }
        }

        return resultado;
    }

    handlerOnChange(item) {
        var cfiltradas = this.filtrarCiudad(this.state.todos_trabajos, item);
        this.setState(() => {
            empresas = this.eliminaDuplicadosUbicacion(cfiltradas);
        });
       // console.log("Dato recibido from child: " + item);
    }
    render() {
        return (
            <div>
                <label>{this.props.Lnombre}</label>
                <select className="custom-select">
                    {this.state.datos && this.state.datos.map((item, key) =>
                        <SelectOptionUb key={item.id}
                            value={item.id}
                            text={item.location}
                            mpadre={this.handlerOnChange}
                        >
                        </SelectOptionUb>)}
                </select>
               {this.state.empresas?<SelectEmpresa Lnombre="Empresa" values={this.state.empresas}></SelectEmpresa> :''} 
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
            datos: this.props.job_list
        }
    }
    render() {
        return (
            <form>
                <InputDate Lnombre="Fecha Publicación"></InputDate>
                <SelectUbicacion Lnombre="Ubicación" values={this.state.datos}></SelectUbicacion>

                <Radio Lnombre="Tipo Horario"></Radio>

                <input type="submit" value="Filtrar" className="btn btn-primary"></input>

            </form>
        );
    }

}

export default LateralFilter;
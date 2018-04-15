import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputDate extends Component{
    render(){
        return (
            <div>
                <label className=" col-form-label">{this.props.Lnombre}</label>
                <div className="form-group">
                    <input className="form-control" type="date"/>
                </div>
            </div>
        );
    }
}
class SelectOption extends Component{
    render(){
        return (
            <option value={this.props.value}>{this.props.text}</option>
        );
    }
}
class SelectEmpresa extends Component{
    render(){
        const items = this.props.values;
        return (
            <div>
                <label>{this.props.Lnombre}</label>
                <select className="custom-select" >
                { items && items.map((item,key) =><SelectOption key={item.id} value={item.id} text={item.company}></SelectOption>)}
                </select>
            </div>
        );
    }
}

class SelectUbicacion extends Component{
    constructor(props){
        super(props);
        this.state = {
            datos : this.eliminaDuplicadosUbicacion(this.props.values)
        }
        
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
    eliminaDuplicadosUbicacion = (array) =>{
        alert("Entro");
        var resultado = [];
        var i;
        for(i=0;i<array.length;i++){
            if(!this.contains(resultado,array[i].location)){
                resultado.push(array[i]);
            }
        }

        return resultado;
    }
    render(){
        

        return (
            <div>
                <label>{this.props.Lnombre}</label>
                <select className="custom-select" >
                    { this.state.datos && this.state.datos.map((item,key) =>
                        <SelectOption key={item.id}
                         value={item.id}
                         text={item.location}>
                         </SelectOption>)}
                </select>
            </div>
        );
    }
}

class OpcionesRadio extends Component{
    render(){
        return (// seria bueno agregarle acciones a las opciones para que filteren o para que llenen los otros filtros
            <div className="custom-control custom-radio">
                <input type="radio" id={this.props.value} name="customRadio" className="custom-control-input"/>
                <label className="custom-control-label" >{this.props.text}</label>
            </div>
        );
    }
}
class Radio extends Component{
    render(){
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
class LateralFilter extends Component{
    constructor (props){
        super(props);
        this.state = {
            datos : this.props.job_list
        }
    }
    render(){
        return(
           <form>
               <InputDate Lnombre="Fecha Publicación"></InputDate>
               <SelectUbicacion Lnombre="Ubicación" values={this.state.datos}></SelectUbicacion>
               <SelectEmpresa Lnombre="Empresa" values={this.state.datos}></SelectEmpresa>
               <Radio Lnombre="Tipo Horario"></Radio>
               
               <input type="submit" value="Filtrar" className="btn btn-primary"></input> 
            
           </form>
        );
    }

}

export default LateralFilter;
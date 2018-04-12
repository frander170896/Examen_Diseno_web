import React, { Component } from 'react';
import PropTypes from 'prop-types';

const jsonPrueba = [
    {
       "value":"1",
       "text":"Opción 1"
    },
    {
       "value":"2",
       "text":"Opción 2"
    },
    {
       "value":"3",
       "text":"Opción 3"
    },
    {
       "value":"4",
       "text":"Opción 4"
    }
   ];

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
class Select extends Component{
    render(){
        const items = this.props.values;
        return (
            <div>
                <label>{this.props.Lnombre}</label>
                <select className="custom-select" >
                { items && items.map((item,key) =><SelectOption key={key} value={item.value} text={item.text}></SelectOption>)}
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
                { items && items.map((item,key) =><OpcionesRadio key={key} value={item.value} text={item.text}></OpcionesRadio>)}
            </div>
        );
    }
}   
class LateralFilter extends Component{
    
    render(){
        return(
           <form>
               <InputDate Lnombre="Fecha Publicación"></InputDate>
               <Select Lnombre="Empresa" values={jsonPrueba}></Select>
               <Select Lnombre="Ubicación" values={jsonPrueba}></Select>
               <Radio Lnombre="Tipo Horario" values={jsonPrueba}></Radio>
               
               <input type="submit" value="Filtrar" className="btn btn-primary"></input> 
            
           </form>
        );
    }

}

export default LateralFilter;
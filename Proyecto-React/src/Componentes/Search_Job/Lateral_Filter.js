import React, { Component } from 'react';

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

class CheckBox extends Component{
    render(){
        return (
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input"/>
                <label class="custom-control-label" for="customCheck1">{this.props.option}</label>
            </div>
        );
    }
}


class LateralFilter extends Component{

    render(){
        return(
           <form>
               <InputDate Lnombre="Fecha Publicación"></InputDate>

               <label>Empresa</label>
               <CheckBox option="Empresa 1"></CheckBox>
               <CheckBox option="Empresa 2"></CheckBox>
               <CheckBox option="Empresa 3"></CheckBox>
               <CheckBox option="Empresa 4"></CheckBox>

               
           </form>
        );
    }

}

export default LateralFilter;
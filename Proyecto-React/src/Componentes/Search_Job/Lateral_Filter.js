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
          <div></div>
        );
    }
}


class LateralFilter extends Component{

    render(){
        return(
           <form>
               <InputDate Lnombre="Fecha Publicación"></InputDate>
           </form>
        );
    }

}

export default LateralFilter;
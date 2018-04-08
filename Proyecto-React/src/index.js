import React,{Component} from 'react';
import Footer from './Componentes/footer';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
//import {container} from 'react-bootstrap';


class Index extends Component{

  render(){
    return (
      <div className="container text-center text-md-left">
        <Footer/>
      </div>
    );
  }

}


ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();


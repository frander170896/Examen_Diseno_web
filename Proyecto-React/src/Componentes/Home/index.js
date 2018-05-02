// Dependencies
import React, { Component } from 'react';
import axios from 'axios';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        datos: null
    }
    this.componentDidMount = this.componentDidMount.bind(this);
}
  componentWillMount() {
      document.title = 'Inicio'
  }
  componentDidMount() {
    var self = this;
    var uri = window.encodeURI('https://api.mlab.com/api/1/databases/una-test-lab/collections/pages?apiKey=12KfjNX97_amx0iUdS2I_eitAy3jSaOb');
    axios.get(uri).then(function (response) {
        self.setState({
            datos: response.data[0]
        })
    });
  }
  render() {
    return (
      <div className="Home">
        
        <div className="row">
            <div className = "offset-md-3 col-md-5 text-center ">
                <h1 className="text-center">{ this.state.datos ? this.state.datos.name : "" }</h1>
                <img className="img-thumbnail rounded" width="200" height="200" alt="Logo_main" src={ this.state.datos ? this.state.datos.main_logo : "" }></img>
            </div>
        </div>
        <hr/>
        <div className="row">
          <aside className="col-sm-12 col-md-4">
              <h2>{ this.state.datos ? this.state.datos.heading_2 : "" }</h2>
              <p className="color-info">{ this.state.datos ? this.state.datos.aside_content : "" }</p>
          </aside>
          <main className="col-sm-12 col-md-7">
              <h2>{ this.state.datos ? this.state.datos.heading_1 : "" }</h2>
              <p className="color-info" >{ this.state.datos ? this.state.datos.main_content : "" }</p>
              <img className="img-thumbnail rounded mt-3" width="300" height="200" alt="img_main" src={ this.state.datos ? this.state.datos.main_img : "" }/>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;

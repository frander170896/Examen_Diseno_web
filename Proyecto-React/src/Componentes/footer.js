import React, {Component}  from 'react';
import '../css/footer.css';

class Footer extends Component {
    render() {
      return (
        <div className="color_footer">
          <div className="row">
              <div className="col-md-4">
                  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
                  <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit.</p>
              </div>
              <hr className="clearfix w-100 d-md-none" />

              <div className="col-md-2 mx-auto">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                  <li>
                    <a href="#!">Link 3</a>
                  </li>
                  <li>
                    <a href="#!">Link 4</a>
                  </li>
                </ul>
              </div>

              <hr className="clearfix w-100 d-md-none"/>

              <div className="col-md-2 mx-auto">
                  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                  <ul className="list-unstyled">
                      <li>
                          <a href="#!">Link 1</a>
                      </li>
                      <li>
                          <a href="#!">Link 2</a>
                      </li>
                      <li>
                          <a href="#!">Link 3</a>
                      </li>
                      <li>
                          <a href="#!">Link 4</a>
                      </li>
                  </ul>
              </div>
    
              <hr className="clearfix w-100 d-md-none"/>

              <div className="col-md-2 mx-auto">
                  <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!">Link 1</a>
                    </li>
                    <li>
                      <a href="#!">Link 2</a>
                    </li>
                    <li>
                      <a href="#!">Link 3</a>
                    </li>
                    <li>
                      <a href="#!">Link 4</a>
                    </li>
                  </ul>
              </div>
          </div>
          <hr/>

          <div className="footer-copyright py-3 text-center">
            © 2018 Copyright
          </div>
        </div>
        
      );
    }
}

export default Footer;

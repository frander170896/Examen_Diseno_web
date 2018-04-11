import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/footer.css';

import banner from "./images/banner-jobs3.jpg";
import user from "./icons/usuario.png";

import logoHeader from "./icons/reunion.png";
import Home from "./icons/home.png";


class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        items: PropTypes.array.isRequired
    };
    render() {
        const { title, items } = this.props;
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <img src={logoHeader} className="img-thumbnail" id="image" alt="image" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                            {items && items.map(
                                (item, key) => <li className='nav-item' key={key}><Link className='btn btn-link' to={item.url}>{item.title}</Link></li>
                            )}

                        </ul>

                        <a href="#" id="navbar-static-login" className="nav-link waves-effect waves-light">
                            <span className="clearfix d-none d-sm-inline-block">Log In</span>
                            <img src={user} className="img-thumbnail imgheader" alt="login" />
                        </a>
                    </div>
                </nav>
                <div className="row mt-1">
                    <img src={banner} className="img-thumbnail" id="imgheader" alt="header" />
                </div>
              
            </div>

        );
    }
}

export default Header;
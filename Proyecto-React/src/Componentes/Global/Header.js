import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './css/footer.css';

import banner from "./images/banner-jobs3.jpg";
import user from "./icons/usuario.png";
class Header extends Component {
    static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
    render() {
        const { title, items } = this.props;
        return (
            <div>
                <nav class="navbar navbar-expand-sm navbar-light bg-light">
                    <a class="navbar-brand" href="#">JOB SEARCH</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Home
                        <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                    Dropdown
                    </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>

                        </ul>

                        <a href="#" id="navbar-static-login" class="nav-link waves-effect waves-light">
                            <span class="clearfix d-none d-sm-inline-block">Log In</span>
                            <img src={user}class="img-thumbnail imgheader" alt="login" />
                        </a>
                    </div>
                </nav>
                <div class="row mt-1">
                    <img src={banner} class="img-thumbnail" id="imgheader" alt="header" />
                </div>
                <div class="">
                    <nav>
                        <ul class="nav justify-content-end">
                        {items && items.map(
                                (item, key) => <li className='nav-item' key={key}><Link className='btn btn-link' to={item.url}>{item.title}</Link></li>
                                )}

                        </ul>
                    </nav>
                </div>
            </div>

        );
    }
}

export default Header;
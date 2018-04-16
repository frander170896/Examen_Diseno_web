// Dependencies
import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';
import renderHTML from 'react-render-html';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showLogin: this.props.showLogin
        };

        this.hideModal = this.hideModal.bind(this);
    }
    hideModal() {
        this.setState({
            showLogin: false
        });
    }

    render() {

        return (
                <Modal visible={this.state.showLogin} onClickBackdrop={this.hideModal} dialogClassName="modal-md">
                    <div className="modal-header">
                        <h5 className="modal-title">Login</h5>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                        <div className="col-md-1"></div>
                            <div className="card border-dark col-md-10">
                                <div className="card-header h2">Login</div>
                                <div className="card-body text-dark">
                                    <form>
                                    <div className="form-group">
                                            <label className="sr-only" for="email">Email</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input type="email" className="form-control" id="email" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label className="sr-only" for="password">Password</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text fa fa-user"></div>
                                                </div>
                                                <input type="password" class="form-control" id="password" placeholder="Password"/>
                                            </div>
                                        </div>
                                        <a className="btn btn-primary mb-2" href="search">Login</a>
                                        <small><a href="register">Or create an account</a></small>
                                    </form>
                                </div>
                            </div>
                             <div className="col-md-1"></div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" onClick={this.hideModal}>Close</button>
                    </div>
                </Modal>
                );
    }
}
export default Login;

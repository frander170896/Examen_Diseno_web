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
                        
                    </div>
                    <div className="modal-footer">
                        <button type="button" class="btn btn-secondary" href="search">Close</button>
                        <button type="button" class="btn btn-secondary" onClick={this.hideModal}>Close</button>
                    </div>
                </Modal>
                );
    }
}
export default Login;

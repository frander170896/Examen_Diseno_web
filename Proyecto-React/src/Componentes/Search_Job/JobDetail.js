// Dependencies
import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';

    class JobDetail extends Component {
   constructor(props, context) {
    super(props, context);
    this.state = {
        description:this.props.description
    };
  }

  render() {
      
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">Red Alert!</h5>
        </div>
        <div className="modal-body">
          <p>{this.state.description}</p>
        </div>
        <div className="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </Modal>
    );
  }
}
export default JobDetail;

// Dependencies
import React, { Component } from 'react';
import Modal from 'react-bootstrap4-modal';
import Popover from 'react-bootstrap/lib/Popover';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Button from 'react-bootstrap/lib/Button';
import renderHTML from 'react-render-html';

    class JobDetail extends Component {
   constructor(props, context) {
    super(props, context);
    this.state = {
        description:this.props.description,
        jobtitle:this.props.jobtitle
    };
  }

  render() {
      
    return (
      <Modal visible={true} onClickBackdrop={this.modalBackdropClicked} dialogClassName="modal-lg">
        <div className="modal-header">
          <h5 className="modal-title">Job Name: {this.state.jobtitle}</h5>
        </div>
        <div className="modal-body">
          {renderHTML(this.state.description)}
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

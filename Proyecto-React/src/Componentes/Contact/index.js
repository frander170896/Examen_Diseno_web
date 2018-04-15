// Dependencies
import React, { Component }
from 'react';

class Contact extends Component {
render() {
return (
<div className="row">
    <div className="col-md-3"></div>
    <div class="card border-dark col-md-6">
        <div class="card-header h2">Contact</div>
        <div class="card-body text-dark">
            <p class="card-text">Thank you for using this product. Please, complete the form below, so we can provide quick and efficient service.</p>
            <form>
            <div class="form-group">
                <label class="sr-only" for="name">Name</label>
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                    </div>
                    <input type="text" class="form-control" id="name" placeholder="Name"/>
                </div>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Another label</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                </div>
            </form>
        </div>
    </div>
    <div className="col-md-3"></div>
</div>
);
}
}

export default Contact;

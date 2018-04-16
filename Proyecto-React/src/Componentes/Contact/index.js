// Dependencies
import React, { Component } from 'react';



class Contact extends Component {
    render() {
        return (
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="card border-dark col-md-6">
                        <div className="card-header h2">Contact</div>
                        <div className="card-body text-dark">
                            <p className="card-text">Thank you for using this product. Please, complete the form below, so we can provide quick and efficient service.</p>
                            <form>
                                <div class="form-group">
                                    <label className="sr-only" for="name">Name</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text fa fa-user"></div>
                                        </div>
                                        <input type="text" class="form-control" id="name" placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" for="phone">Phone</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text fa fa-phone"></div>
                                        </div>
                                        <input type="text" className="form-control" id="phone" placeholder="Phone"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" for="email">Email</label>
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text">@</div>
                                        </div>
                                        <input type="email" className="form-control" id="email" placeholder="Email"/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mb-2">Send</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-3"></div> 
                </div>
                );
    }
}

export default Contact;

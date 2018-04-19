// Dependencies
import React, { Component } from 'react';
import register_img from "../Global/images/register.png";
import '../Global/css/Register/register.css';
//import '../Global/css/Global/content.css';

class Register extends Component {
    render() {
        return (
            <div className="register text-center">
                {/*<img src={register_img} alt="Register"/>*/}
                <form className="register-form" action="" method="">
                    <fieldset className="scheduler-border">
                    <legend className="scheduler-border">Register</legend>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input className="form-control" type="text" placeholder="Full Name" required/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
                                <input type="radio" id="male" name="gender"/>
                                <label for="male"><span></span>Male</label>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left">
                                <input type="radio" id="female" name="gender"/>
                                <label for="female"><span></span>Female</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="input-group">
                                    <input type='text' className="form-control"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input className="form-control" type="email" placeholder="Email" required/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input className="form-control" type="password" placeholder="Password" required/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input className="form-control" type="password" placeholder="Confirm Password" required/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <input className="form-control" type="text" placeholder="Job" required/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <select className="form-control" name="province" required>
                                    <option value="">Select a province</option>
                                    <option value="1">San José</option>
                                    <option value="2">Alajuela</option>
                                    <option value="3">Heredia</option>
                                    <option value="4">Cartago</option>
                                    <option value="5">Guanacaste</option>
                                    <option value="6">Puntarenas</option>
                                    <option value="7">Limón</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="custom-file">
                                    <input type="file" className="custom-file-input" name="file" required/>
                                    <label className="custom-file-label" for="customFile">Attach CV</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button className="btn btn-primary" type="button" name="finalize">Finalize</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Register;

// Dependencies
import React, { Component } from 'react';
import register_img from "../Global/images/register.png";
require('../Global/css/register.css');

class Register extends Component {
    render() {
        return (
            <div className="Register text-center">
                <img src={register_img} alt="Register"/>
                <form className="register-form" action="" method="">
                    <fieldset className="scheduler-border">
                    <legend className="scheduler-border">Register</legend>
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Full Name"/>
                        </div>
                        <div className="input-group">
                            <label className="custom-control custom-radio">
                                <input id="radio1" name="radio" type="radio" className="custom-control-input"/>
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description">Male</span>
                            </label>
                            <label className="custom-control custom-radio">
                                <input id="radio2" name="radio" type="radio" className="custom-control-input"/>
                                <span className="custom-control-indicator"></span>
                                <span className="custom-control-description">Female</span>
                            </label>
                        </div>
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Full Name"/>
                        </div>
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Email"/>
                        </div>
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Password"/>
                        </div>
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Confirm Password"/>
                        </div>
                        <div className="input-group">
                            <input className="form-control" type="text" placeholder="Job"/>
                        </div>
                        <div className="input-group">
                            <select className="form-control" name="province">
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
                        <div className="input-group">
                            <label className="custom-file form-control">
                                <input type="file" id="file" className="custom-file-input"/>
                                <span className="custom-file-control"></span>
                            </label>
                        </div>
                        <div className="input-group">
                            <button className="btn btn-primary" type="button" name="finalize">Finalize</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default Register;

// Dependencies
import React, { Component } from 'react';
import about_us from "../Global/images/About.jpg";
import '../Global/css/About/about.css';

import CardGroup from './CardGroup';
class About extends Component {
    render() {
        return (
            <div className="About">
                <div className='row'>
                
                    <div className='col-md-6'>
                        <img src={about_us} className="img-fluid" alt="about us" id="" />
                    </div>
                    <div className='col-md-6'>
                        <h1>About us</h1>
                        <p>Founded in April of 2018, job search by Delta is trusted web site to search jobs from GitHub from anyplace of the world.</p>
                        <p>Job search by Delta connects people to jobs and it is the easiest way for this people to search this information by differents ways, for example, by categories.</p>
                    </div>
                    <CardGroup/>
                </div>
            </div>
        );
    }
}

export default About;

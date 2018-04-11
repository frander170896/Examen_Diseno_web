import React, { Component } from 'react';

import company_url from "../Global/icons/reunion.png";

class CompanyLogo extends Component{
    render(){
        return (
            <img src={this.props.company_logo} className="img-thumbnail" alt="image" />
        );
    }
}


class JobItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          jobtitle: 'JOB TITLE',
          job_description: 'JOB DESCRIPTION'
        };
      }

    render() {
        return (
            <div className="card border-success">
            <div className="card border-success">
                <div className="card-body">
                    <h5 className="card-title">{this.props.jobtitle}</h5>

                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">{this.props.job_description}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                    <CompanyLogo  company_logo={company_url}/>
                    <div className="card-footer">Card Footer</div>
                </div>
            </div>
            </div>
        );
    }

}

export default JobItem;
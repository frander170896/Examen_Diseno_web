import React, { Component } from 'react';



class CompanyLogo extends Component {
    render() {
        return (
            <img src={this.props.company_logo} className="img-thumbnail" alt="company" />
        );
    }
}

class ApplyLink extends Component {
    render() {
        return (
            <a className='active btn btn-link' href={this.props.company_url}>
                {this.props.action_name}
            </a>
        );
    }
}


class JobItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobtitle: 'JOB TITLE',
            job_description: 'JOB DESCRIPTION',
            company_logo: "../Global/icons/reunion.png",
            company_url: 'http://www.google.com',
            job_type:'Full time',
            company_description:'We are improving'
            
        };
    }
  
    render() {
        return (
            <div className="card border-success">
                <div className="card border-success">
                    <div className="card-body">
                        <h2 className="card-title">{this.props.jobtitle}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">About the job</h3>
                        <p>
                            <i>{this.props.job_type}</i>
                        </p>
                        <p className="card-text">{this.props.job_description}</p>
                        <h3 className="card-subtitle mb-2 text-muted">About the company</h3>
                        <CompanyLogo company_logo={this.props.company_logo} />
                        <p>
                            <i>{this.props.company_description} <ApplyLink company_url={this.props.company_url} action_name={'Visit Us'} /></i>
                        </p>
                        <div className="card-footer"><ApplyLink company_url={this.props.company_url} action_name={'Apply'} /></div>
                    </div>
                </div>
            </div>
        );
    }

}

export default JobItem;
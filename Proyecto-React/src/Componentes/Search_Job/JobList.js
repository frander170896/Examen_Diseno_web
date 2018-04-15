import React, { Component } from 'react';
import JobDetail from './JobDetail';

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
            job_type: 'Full time',
            company_description: 'We are improving',
            created_at: null,
            how_to_apply: 'Email us!',
            show:false
        };
    }
    handleShow() {
    this.setState({ show: true });
  }
    render() {
        return (
                <div className="card border-success">
        <JobDetail visible={this.state.show} />
                    <div className="card border-success">
                        <div className="card-body">
                            <h2 className="card-title">{this.props.jobtitle}</h2>
                            <h3 className="card-subtitle mb-2 text-muted">About the job</h3>
                            <p>
                                <i><strong>Job Type:  </strong> {this.props.job_type}</i>
                
                            </p>
                            <p><i><strong>Created:</strong>  {this.props.created_at}</i> </p>
                            <p className="card-text">{this.props.job_description}</p>
                            <p>Click to get the full Modal experience!</p>
                
                
                            <button className="btn btn-primary" onClick={this.handleShow}>View Job and apply</button>
                            <p>
                                <i><strong>How to apply: </strong>{this.props.how_to_apply}</i>
                            <ApplyLink company_url={this.props.company_url} action_name={'Go to companys page...'} />
                            </p>
                            <h3 className="card-subtitle mb-2 text-muted">About the company</h3>
                            <CompanyLogo company_logo={this.props.company_logo} />
                            <p>
                                <i>{this.props.company_description}
                                    <ApplyLink company_url={this.props.company_url} action_name={'Visit Us'} />
                                </i>
                            </p>
                            <div className="card-footer"></div>
                        </div>
                    </div>
                    
                </div>
                );
    }

}
class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: this.props.job_list
        }
        console.log(this.state.jobs[0])
    }
    render() {
        return (
                this.state.jobs.map(elemento => <div key={elemento.id}>
                    <JobItem jobtitle={elemento.title}
                             job_type={elemento.type}
                             job_description={elemento.description}
                             created_at={elemento.created_at}
                             how_to_apply={elemento.how_to_apply}
                             company_logo={elemento.company_logo}
                             company_url={elemento.company_url}
                             />
                </div>)

                )
    }

}
export default JobList;
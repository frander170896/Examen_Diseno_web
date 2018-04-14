import React, { Component } from 'react';
import JobItem from './JobItem.js';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs:this.props.job_list
        }
      
    }
    
    render() {
        return (
            
            this.state.jobs.map((job) => { 
                <JobItem jobtitle={job.title}
                    job_description={job.description} company_url={job.company_url}
                    company_logo={job.company_logo} job_type= {job.type} 
                    company_description={job.company_description} >
                </JobItem>}
            )

        )
    }

}

export default JobList;
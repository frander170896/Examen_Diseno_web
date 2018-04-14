import React, { Component } from 'react';
import LateralFilter from './Lateral_Filter';
import JobList from './JobList.js';

class Search extends Component {
    constructor(props) {
        super(props);
    }

    get_jobs() {

        const posts = [
            { jobtitle: 'SENIOR JAVA DEVELOPER', title: 'Hello World', content: 'Welcome to learning React!' },
            { id: 2, title: 'Installation', content: 'You can install React from npm.' }
        ];
        /*
         <JobItem jobtitle={'SENIOR JAVA DEVELOPER'} job_description='Requires experience, minimum 30 year working on full time'
                            company_url={'http://www.google.com'} 
                            company_logo={"https://9to5mac.files.wordpress.com/2018/02/logo.jpg?quality=82&strip=all&w=1500"}
                            job_type={'Full time'}
                            company_description='Description: We are improving...'
                            />
        */

        return posts;
    }

    render() {
        return (
            <div className="container">
                <div className="row search">

                </div>
                <div className="row jobs">

                    <div className="col-ms-12 col-md-3 col-lg-3" >
                        <LateralFilter></LateralFilter>
                    </div>
                    <div className="col-ms-12 col-md-9 col-lg-9" >
                        <JobList job_list={this.get_jobs()} />
                    </div>
                </div>
            </div>
        );
    }
}


export default Search;
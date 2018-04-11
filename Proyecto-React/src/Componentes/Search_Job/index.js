import React, { Component } from 'react';
import LateralFilter from './Lateral_Filter';
import JobItem from './JobItem.js';

    class Search extends Component {
        constructor(props){
            super(props);  
        }

        render(){
            return (
                <div className="container-fluid">
                    <div className="row search">
                       
                    </div>
                    <div className="row jobs">
                        <div className="col-ms-12 col-md-3 col-lg-3" >
                             <LateralFilter></LateralFilter>
                        </div>
                        <div className="col-ms-12 col-md-4 col-lg-4" >
                            <JobItem jobtitle={'SENIOR JAVA DEVELOPER'} job_description='Requires experience, minimum 30 year working on full time'
                            company_url={'http://www.google.com'} 
                            company_logo={"https://9to5mac.files.wordpress.com/2018/02/logo.jpg?quality=82&strip=all&w=1500"}
                            job_type={'Full time'}
                            company_description='Description: We are improving...'
                            />
                        </div>
                    </div>
                </div>
            );
        }
    }


export default Search;
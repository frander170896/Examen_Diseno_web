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
                        <LateralFilter></LateralFilter>
                    </div>
                    <div className="row jobs">
                        <div className="col-ms-12 col-md-4 col-lg-4" >
                            <JobItem jobtitle={'Titulo'} job_description='Requires experience, minimum 30 year working on full time'/>
                        </div>
                    </div>
                </div>
            );
        }
    }


export default Search;
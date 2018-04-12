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
                        <div className="col-ms-12 col-md-9 col-lg-9" >
                            <JobItem jobtitle={'Titulo'} job_description='Requires experience, minimum 30 year working on full time'/>
                        </div>
                    </div>
                </div>
            );
        }
    }


export default Search;
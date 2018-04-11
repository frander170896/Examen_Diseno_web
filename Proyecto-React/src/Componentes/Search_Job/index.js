import React, { Component } from 'react';
import LateralFilter from './Lateral_Filter';

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

                        </div>
                    </div>
                </div>
            );
        }
    }


export default Search;
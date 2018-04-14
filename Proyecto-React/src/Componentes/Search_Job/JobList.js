import React, { Component } from 'react';
import JobItem from './JobItem.js';

class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs:this.props.job_list
        }
      alert("GERSON ES EL CULPABLE"+this.state.jobs[0].title);
    }
    
    render() {
        return (
            this.state.jobs.map(elemento => <li key={elemento.id}>{elemento.title}</li>)
           

        )
    }

}
export default JobList;
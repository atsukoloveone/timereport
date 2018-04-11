import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import VisibleActivityList from '../containers/VisibleActivityList';

  class Activity extends React.Component {  
  render() {      
  this.state = {
    value: 1,
  };

  this.handleChange = (event, index, value) => this.setState({value});      

    return (
      <div>
        <div style={{paddingLeft:10}}>
        <h2>Aktiviteter information</h2>
            <VisibleActivityList />
        </div>
      </div>
    );
  }
}


export default Activity;

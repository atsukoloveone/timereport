import React from 'react';
import DropDownMenu from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';



export default class Activity extends React.Component {      
  render() {    
  this.state = {
    value: 2,
  };

      this.handleChange = (event, index, value) => this.setState({value});


 

    return (
      <div>
        <div style={{paddingLeft:10}}>
        <h2>Aktiviteter information</h2>

        
        <DropDownMenu
          floatingLabelText="Aktivitet name:"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>        
        </div>
      </div>
    );
  }
}



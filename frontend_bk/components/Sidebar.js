import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom'
const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const Sidebar = () => (
  <div>
    <Drawer
    width={250}>


    
    <Paper style={style}>
      <Link to="/" >Home</Link>
      <Menu>
        <MenuItem primaryText="Tid i veckovyn" leftIcon={<RemoveRedEye />} />
        <Divider />    
        <MenuItem primaryText="Fakturera timme" leftIcon={<PersonAdd />} />
        <MenuItem primaryText="Fakturera fastpris" leftIcon={<PersonAdd />} />
        <Divider />        
        <MenuItem primaryText="Reskontra" leftIcon={<ContentLink />} />
        <MenuItem primaryText="Journal" leftIcon={<ContentCopy />} />
        <Divider />
        <MenuItem primaryText="Klienter" leftIcon={<Download />} />
        <MenuItem primaryText="Projekt" leftIcon={<Download />} />
        <MenuItem primaryText="Aktiviteter" leftIcon={<Delete />} containerElement={<Link to="/Activity" />}/>
        <MenuItem primaryText="Konsulter" leftIcon={<Delete />} />
        <Divider />    
        <MenuItem primaryText="logout" leftIcon={<Delete />} />
      </Menu>
    </Paper> 
    </Drawer>
  </div>
);

export default Sidebar;
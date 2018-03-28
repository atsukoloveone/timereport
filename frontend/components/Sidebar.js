import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import Delete from 'material-ui/svg-icons/action/delete';
import FontIcon from 'material-ui/FontIcon';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const Sidebar = () => (
  <div>
    <Paper style={style}>
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
        <MenuItem primaryText="Projekt" leftIcon={<Delete />} />
        <MenuItem primaryText="Aktiviteter" leftIcon={<Delete />} />
        <MenuItem primaryText="Konsulter" leftIcon={<Delete />} />
        <Divider />    
        <MenuItem primaryText="logout" leftIcon={<Delete />} />
      </Menu>
    </Paper>    
  </div>
);

export default Sidebar;
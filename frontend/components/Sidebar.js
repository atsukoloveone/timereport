import React from "react";
import Paper from "material-ui/Paper";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import Drawer from "material-ui/Drawer";

import Divider from "material-ui/Divider";
import ContentCopy from "material-ui/svg-icons/content/content-copy";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ListAltIcon from "@material-ui/icons/ListAlt";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import DescriptionIcon from "@material-ui/icons/Description";
import AssignmentOutlinedIcon from "@material-ui/icons/AssignmentOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

import { Link } from "react-router-dom";

const style = {
  display: "inline-block",
  margin: "16px 32px 16px 0",
};

const Sidebar = () => (
  <div>
    <Drawer width={250}>
      <Paper style={style}>
        <Link to="/">Home</Link>
        <Menu>
          <MenuItem primaryText="Tid i veckovyn" leftIcon={<EventNoteIcon />} />
          <Divider />
          <MenuItem
            primaryText="Fakturera timme"
            leftIcon={<DescriptionIcon />}
          />
          <MenuItem
            primaryText="Fakturera fastpris"
            leftIcon={<DescriptionOutlinedIcon />}
          />
          <Divider />
          <MenuItem primaryText="Reskontra" leftIcon={<ListAltIcon />} />
          <MenuItem primaryText="Journal" leftIcon={<ContentCopy />} />
          <Divider />
          <MenuItem
            primaryText="Klienter"
            leftIcon={<SupervisorAccountIcon />}
            containerElement={<Link to="/Client" />}
          />
          <MenuItem
            primaryText="Projekt"
            leftIcon={<AssignmentOutlinedIcon />}
          />
          <MenuItem
            primaryText="Aktiviteter"
            leftIcon={<LocalActivityIcon />}
            containerElement={<Link to="/Activity" />}
          />
          <MenuItem primaryText="Konsulter" leftIcon={<PersonIcon />} />
          <Divider />
          <MenuItem primaryText="logout" leftIcon={<ExitToAppIcon />} />
        </Menu>
      </Paper>
    </Drawer>
  </div>
);

export default Sidebar;

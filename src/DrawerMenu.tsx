import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import {
  Mail as MailIcon,
  Home as HomeIcon,
  AssignmentTurnedIn as AssignmentTurnedInIcon,
  ExpandLess,
  ExpandMore,
} from '@material-ui/icons';

import MenuItemLink from './MenuItemLink';
import { Database } from './icons/Database';

const DrawerMenu = () => {
  const [skillsOpen, setSkillsOpen] = useState(true);

  const handleSkillsClick = () => {
    setSkillsOpen(!skillsOpen);
  };

  return (
    <List>
      <MenuItemLink to="/" primary="Home" icon={<HomeIcon />} />
      <ListItem button onClick={handleSkillsClick}>
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Skills" />
        {skillsOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={skillsOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <MenuItemLink to="/technologies" primary="Technologies" icon={<HomeIcon />} nested />
          <MenuItemLink to="/databases" primary="Databases" icon={<Database />} nested />
          <MenuItemLink
            to="/operating-systems"
            primary="Operating Systems"
            icon={<HomeIcon />}
            nested
          />
        </List>
      </Collapse>
      <MenuItemLink to="/mail" primary="Mail" icon={<MailIcon />} />
    </List>
  );
};

export default DrawerMenu;

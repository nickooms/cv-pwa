import { useState, useMemo, ReactElement, forwardRef } from 'react';
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Mail as MailIcon, Home as HomeIcon, ExpandLess, ExpandMore } from '@material-ui/icons';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
// import { Route } from 'react-router';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Omit } from '@material-ui/types';

import MenuButton from './MenuButton';
import FavoriteTechnologies from './FavoriteTechnologies';
import { Database } from './icons/Database';
// import Technologies from './Technologies';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

interface ListItemLinkProps {
  icon?: ReactElement;
  primary: string;
  to: string;
  nested?: boolean;
}

function ListItemLink(props: ListItemLinkProps) {
  const { icon, primary, to, nested } = props;
  const classes = useStyles();

  const renderLink = useMemo(
    () =>
      forwardRef<any, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink} {...(nested && { className: classes.nested })}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

export default function ResponsiveDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [skillsOpen, setSkillsOpen] = useState(true);

  const handleSkillsClick = () => {
    setSkillsOpen(!skillsOpen);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Router>
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
          <ListItem button onClick={handleSkillsClick}>
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Skills" />
            {skillsOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={skillsOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemLink to="/technologies" primary="Technologies" icon={<HomeIcon />} nested />
              <ListItemLink to="/databases" primary="Databases" icon={<Database />} nested />
              <ListItemLink
                to="/operating-systems"
                primary="Operating Systems"
                icon={<HomeIcon />}
                nested
              />
            </List>
          </Collapse>
          <ListItemLink to="/mail" primary="Mail" icon={<MailIcon />} />
        </List>
      </div>
    </Router>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <MenuButton onClick={handleDrawerToggle} />
          <Typography variant="h6" noWrap>
            Nick Ooms
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <FavoriteTechnologies />
        {/* <Technologies /> */}
      </main>
    </div>
  );
}

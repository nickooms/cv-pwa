import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
// import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

import JavaScriptIcon from './icons/JavaScriptIcon';
import ReactIcon from './icons/ReactIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default function FavoriteTechnologies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <List
          component="nav"
          aria-label="favorite technologies"
          subheader={<ListSubheader component="div">Favorite Technologies</ListSubheader>}
        >
          <ListItem button>
            <ListItemIcon>
              <JavaScriptIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ReactIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="React" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folders">
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItemLink href="#simple-list">
            <ListItemText primary="Spam" />
          </ListItemLink>
        </List>
      </Paper>
    </div>
  );
}

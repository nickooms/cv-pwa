import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader, Paper } from '@material-ui/core';

import { technologies } from './data/technologies';
import Technology from './Technology';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      // maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const header = <ListSubheader component="div">Favorite Technologies</ListSubheader>;

export default function FavoriteTechnologies() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <List component="nav" aria-label="favorite technologies" subheader={header}>
          {technologies.map(Technology)}
        </List>
      </Paper>
    </div>
  );
}

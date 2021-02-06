import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader, Paper } from '@material-ui/core';

import JavaScriptIcon from './icons/JavaScriptIcon';
import TypeScriptIcon from './icons/TypeScriptIcon';
import NodeJSIcon from './icons/NodeJSIcon';
import ReactIcon from './icons/ReactIcon';
import TechnologyListItem from './TechnologyListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
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
          <TechnologyListItem icon={<JavaScriptIcon />} text="JavaScript" />
          <TechnologyListItem icon={<TypeScriptIcon />} text="TypeScript" />
          <TechnologyListItem icon={<ReactIcon />} text="React" />
          <TechnologyListItem icon={<NodeJSIcon />} text="Node.js" />
        </List>
      </Paper>
    </div>
  );
}

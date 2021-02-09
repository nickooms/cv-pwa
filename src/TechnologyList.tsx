import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListSubheader /*, Paper*/ } from '@material-ui/core';

import { TechnologyArray } from './data/technologies';
import Technology from './Technology';

interface TechnologyListProps {
  technologies: TechnologyArray;
  title?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const TechnologyList = ({ technologies, title = 'Technologies' }: TechnologyListProps) => {
  const classes = useStyles();

  const subheader = <ListSubheader component="div">{title}</ListSubheader>;

  return (
    <div className={classes.root}>
      {/* <Paper elevation={3}> */}
      <List component="nav" aria-label={title.toLowerCase()} subheader={subheader}>
        {technologies.map(Technology)}
      </List>
      {/* </Paper> */}
    </div>
  );
};

export default TechnologyList;

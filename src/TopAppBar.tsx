import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

import MenuButton from './MenuButton';

const drawerWidth = 300;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
  })
);

interface TopAppBarProps {
  onDrawerToggle: () => void;
}

const TopAppBar = ({ onDrawerToggle = () => {} }: TopAppBarProps) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <MenuButton onClick={onDrawerToggle} />
        <Typography variant="h6" noWrap>
          Nick Ooms
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopAppBar;

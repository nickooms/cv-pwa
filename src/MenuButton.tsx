import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  })
);

interface Props {
  onClick?: () => void;
}

export default function MenuButton({ onClick = () => {} }: Props) {
  const classes = useStyles();
  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={onClick}
      className={classes.menuButton}
    >
      <MenuIcon />
    </IconButton>
  );
}

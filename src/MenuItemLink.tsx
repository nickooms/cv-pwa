import { useMemo, ReactElement, forwardRef } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { Omit } from '@material-ui/types';

interface MenuItemLinkProps {
  icon?: ReactElement;
  primary: string;
  to: string;
  nested?: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

const MenuItemLink = ({ icon, primary, to, nested }: MenuItemLinkProps) => {
  const classes = useStyles();

  const renderLink = useMemo(
    () =>
      forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
        <RouterLink to={to} ref={ref} {...props} />
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
};

export default MenuItemLink;

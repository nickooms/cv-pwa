import { FC, ReactElement } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

interface Props {
  icon: ReactElement;
  primary: string;
  secondary?: string;
}

const TechnologyListItem: FC<Props> = ({ icon, primary, secondary }) => (
  <ListItem button alignItems="flex-start">
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={primary} {...(secondary && { secondary })} />
  </ListItem>
);

export default TechnologyListItem;

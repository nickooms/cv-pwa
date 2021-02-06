import { FC, ReactElement } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

interface Props {
  icon: ReactElement;
  text: string;
}

const TechnologyListItem: FC<Props> = ({ icon, text }) => (
  <ListItem button>
    <ListItemIcon>{icon}</ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default TechnologyListItem;

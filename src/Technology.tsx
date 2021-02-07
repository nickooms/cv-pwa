import type { TechnologyItem } from './data/technologies';
import TechnologyListItem from './TechnologyListItem';
import { Icons } from './icons';

const Technology = ({ id, icon, name, description }: TechnologyItem) => {
  const Icon = Icons[icon];
  return (
    <TechnologyListItem
      key={id}
      icon={<Icon style={{ fontSize: 48 }} />}
      primary={name}
      secondary={description}
    />
  );
};

export default Technology
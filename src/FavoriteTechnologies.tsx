import { technologies, TechnologyItem } from './data/technologies';
import TechnologyList from './TechnologyList';

const isFavoriteTechnology = (technology: TechnologyItem): boolean =>
  Boolean(technology.isFavorite);

const FavoriteTechnologies = () => (
  <TechnologyList
    title="Favorite Technologies"
    technologies={technologies.filter(isFavoriteTechnology)}
  />
);

export default FavoriteTechnologies;

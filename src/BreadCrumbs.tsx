import React from 'react';
import { Typography, Breadcrumbs, Link } from '@material-ui/core';

const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
};

const BreadCrumbs = () => (
  <Breadcrumbs aria-label="breadcrumbs">
    <Link color="inherit" href="/" onClick={handleClick}>
      Material-UI
    </Link>
    <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
      Core
    </Link>
    <Typography color="textPrimary">Breadcrumb</Typography>
  </Breadcrumbs>
);

export default BreadCrumbs;

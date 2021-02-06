import { FC, ReactChild } from 'react';

const Name: FC<{ children: ReactChild }> = ({ children: name }) => (
  <span>{name}</span>
);

export default Name;

export interface TechnologyItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  isFavorite?: boolean;
}

export type TechnologyArray = TechnologyItem[];

export const technologies: TechnologyArray = [
  {
    id: 'JavaScript',
    name: 'JavaScript',
    icon: 'JavaScript',
    description:
      'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
    isFavorite: true,
  },
  {
    id: 'TypeScript',
    name: 'TypeScript',
    icon: 'TypeScript',
    description:
      'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
    isFavorite: true,
  },
  {
    id: 'React',
    name: 'React',
    icon: 'React',
    description:
      'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
    isFavorite: true,
  },
  {
    id: 'NodeJS',
    icon: 'NodeJS',
    name: 'Node.js',
    description:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser.',
    isFavorite: true,
  },
  {
    id: 'WebGL',
    name: 'WebGL',
    icon: 'WebGL',
    description:
      'WebGL (Short for Web Graphics Library) is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. WebGL is fully integrated with other web standards, allowing GPU-accelerated usage of physics and image processing and effects as part of the web page canvas.',
    isFavorite: true,
  },
  {
    id: 'Docker',
    name: 'Docker',
    icon: 'Docker',
    description:
      'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.',
  },
];

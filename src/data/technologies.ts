export interface TechnologyItem {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export type TechnologyList = TechnologyItem[];

export const technologies: TechnologyList = [
  {
    id: 'JavaScript',
    name: 'JavaScript',
    icon: 'JavaScript',
    description:
      'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
  },
  {
    id: 'TypeScript',
    name: 'TypeScript',
    icon: 'TypeScript',
    description:
      'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language.',
  },
  {
    id: 'React',
    name: 'React',
    icon: 'React',
    description:
      'React (also known as React.js or ReactJS) is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.',
  },
  {
    id: 'NodeJS',
    icon: 'NodeJS',
    name: 'Node.js',
    description:
      'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the Chrome V8 engine and executes JavaScript code outside a web browser.',
  },
  {
    id: 'WebGL',
    name: 'WebGL',
    icon: 'WebGL',
    description:
      'WebGL (Short for Web Graphics Library) is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. WebGL is fully integrated with other web standards, allowing GPU-accelerated usage of physics and image processing and effects as part of the web page canvas.',
  },
];

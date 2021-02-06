export interface DevelopmentLanguage {
  name: string;
  description?: string;
  versions?: string[];
  parent?: string;
}

export const DevelopmentLanguages: DevelopmentLanguage[] = [
  {
    name: 'JavaScript',
    versions: ['JScript', 'ES3', 'ES5', 'ES6', 'ES7', 'ES8'],
  },
  { name: 'Python' },
  { name: 'C#', versions: ['.NET Framework 1.0 - 4.6'] },
  { name: 'VB', versions: ['6.0 - .NET Framework 2.0'] },
  { name: 'C', versions: ['C', 'C++'] },
  { name: 'Java', versions: ['Java SE 6', 'Java SE7'] },
  { name: 'PASCAL', versions: ['Borland Turbo Pascal'] },
  { name: 'HTML', versions: ['HTML4', 'HTML5', 'DOM', 'CANVAS'] },
  { name: 'CSS', versions: ['CSS', 'CSS3', 'Sass', 'SCSS'] },
  { name: 'XML', versions: ['XSD', 'XSLT', 'XQuery', 'DOM', 'SOAP'] },
  { name: 'SQL', versions: ['ANSI SQL 92 – 2011'] },
  { name: 'Assembly', versions: ['x86', 'asm.js', 'WebAssembly'] },
  { name: 'GL', versions: ['OpenGL', 'WebGL', 'GLSL'] },
  { name: 'BPMN', versions: ['BPMN 2.0', 'BPEL'] },
];

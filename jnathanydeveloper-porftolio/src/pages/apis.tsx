// components/apis.tsx

// Defina uma interface para representar a estrutura de dados de um projeto
interface Project {
  id: number;
  title: string;
  description: string;
  gitHubLink: string;
}

// Tipos são definidos para cada objeto no array para garantir a consistência
export const projectData: Project[] = [
  {
    id: 1,
    title: 'Todo List App',
    description:
      'A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.',
    gitHubLink: 'https://github.com/olawanlejoel/Todo-List-App',
  },
  {
    id: 2,
    title: 'The Office API',
    description:
      'A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.',
    gitHubLink: 'https://github.com/olawanlejoel/Todo-List-App',
  },
  // ... os outros objetos do array
];
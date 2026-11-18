import casaBurguer from '../../assets/casa-burguer2.png'
import clinicaRayol from '../../assets/clinicaRayol.png'
import finanly from '../../assets/finanly2.png'

export const projects = [
  // {
  //   id: 'sistema-mercado-pdv',
  //   name: 'Sistema de mercado / PDV',
  //   badge: 'Projeto para uso em mercado real',
  //   description:
  //     'Sistema para gerenciar produtos, estoque e vendas de um mercado, com leitura de código de barras, banco de dados e back-end.',
  //   highlights: [
  //     'Cadastro de produtos',
  //     'Código de barras',
  //     'Controle de estoque',
  //     'Registro de vendas',
  //   ],
  //   technologies: ['Back-End', 'Banco de dados', 'Código de barras'],
  //   demoUrl: 'https://SEU_LINK_DO_PROJETO',
  //   repoUrl: 'https://github.com/SEU_USUARIO/NOME-DO-REPOSITORIO',
  //   image: '',
  //   previewVariant: 'pdv',
  // },
  {
    id: 'site-hamburgueria',
    name: 'Casa do Burguer',
    badge: '',
    description:
      'Site responsivo para uma hamburgueria, com cardápio, produtos e carrinho de compras funcionando com JavaScript.',
    highlights: [
      'Cardápio e produtos',
      'Carrinho de compras',
      'Interações com JavaScript',
      'Interface responsiva',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: 'https://casadoburguer-prototipo.vercel.app/',
    repoUrl: 'https://github.com/DevPedro2408/casadoburguer2',
    image: casaBurguer,
    previewVariant: 'burger',
  },
  {
    id: 'site-clinica',
    name: 'Clínica Rayol',
    badge: '',
    description:
      'Landing page responsiva para uma clínica, apresentando informações, serviços e formas de contato.',
    highlights: [
      'Landing page',
      'Informações da clínica',
      'Seções de serviços',
      'Contato',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    demoUrl: 'https://clinicarayol.vercel.app/',
    repoUrl: 'https://github.com/DevPedro2408/Clinica-Rayol',
    image: clinicaRayol,
    previewVariant: 'clinic',
  },
  {
    id: 'dashboad-financeiro',
    name: 'Finanly em desenvolvimento',
    badge: '',
    description:
      'Dashboard financeiro para controle de receitas, despesas e metas, com gráficos interativos e interface responsiva.',
    highlights: [
      'Gráficos interativos',
      'Relatórios financeiros',
      'Layout responsivo',
    ],
    technologies: ['HTML5', 'CSS3', 'React.js', 'Vite', 'JavaScript', 'Recharts', 'LocalStorage'],
    demoUrl: 'https://finanly-livid.vercel.app/',
    repoUrl: 'https://github.com/DevPedro2408/finanly',
    image: finanly,
    previewVariant: 'financeiro',
  },
];

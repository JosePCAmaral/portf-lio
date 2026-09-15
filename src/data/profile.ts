export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  education: string;
  about: string;
  languages: string[];
  tools: string[];
  databases: string[];
  experience: ExperienceEntry[];
  projects: Project[];
  contact: {
    github: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;
    email: string;
  };
}

export const profile: Profile = {
  name: "José Pedro Cunha do Amaral",
  title: "Desenvolvedor Fullstack | Backend",
  education: "Engenharia de Software — UTFPR-CP (formado)",
  about:
    "O que mais me motiva é a possibilidade de resolver problemas reais através de soluções web, software e apps. Tenho grande interesse na área de desenvolvimento, com aprofundamento em fullstack e, principalmente, em backend — da modelagem de bancos de dados à construção de APIs robustas, integrações assíncronas e ambientes containerizados.",
  languages: ["C#", "JavaScript", "TypeScript", "Java"],
  tools: ["NestJS", "Angular", "React", "Docker", "RabbitMQ"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  experience: [
    {
      company: "Forlogic",
      role: "Treinamento — Front-end (HTML/CSS/JS) e Back-end (C# .NET)",
      period: "4º semestre — 300h",
      description:
        "Turma de formação em Cornélio Procópio com 300 horas de carga, cobrindo front-end com HTML, CSS e JavaScript e back-end com C# e .NET.",
    },
    {
      company: "CLAMOM",
      role: "Estagiário Fullstack",
      period: "7º e 8º semestre",
      description:
        "Estágio em desenvolvimento fullstack com Node.js, NestJS e Angular, banco de dados MySQL, Docker e RabbitMQ, entre outras ferramentas.",
    },
    {
      company: "CLAMOM",
      role: "Desenvolvedor Fullstack (PJ)",
      period: "Atual",
      description:
        "Contratado como PJ pela mesma empresa, seguindo na mesma função de desenvolvimento fullstack.",
    },
  ],
  projects: [
    {
      name: "TCC — Sistema de RH / Hora Extra com Chatbot IA",
      description:
        "Solução web de ponto com cálculo de horas extras e integração com IA local.",
      technologies: ["NestJS", "Angular"],
      link: "https://github.com/JosePCAmaral/TCC1-SistemaRHHoraExtraChatBoatIa",
    },
    {
      name: "Sistema de Venda de Ingressos",
      description: "Sistema web para venda de ingressos.",
      technologies: [],
      link: "https://github.com/JosePCAmaral/Sistema_de_venda_de_ingressos",
    },
    {
      name: "Operação Curiosidade",
      description:
        "Front-end desenvolvido durante o treinamento na Forlogic (sem back-end).",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/JosePCAmaral/Operacao-Curiosidade",
    },
  ],
  contact: {
    github: "https://github.com/JosePCAmaral",
    linkedin: "https://www.linkedin.com/in/joseamaraldev10/",
    instagram: "https://www.instagram.com/_jpamarall/",
    whatsapp: "https://wa.me/5543999273855",
    email: "joseamaralb04@gmail.com",
  },
};

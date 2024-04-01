import type {
  Data,
  Raffle,
  Event,
  FAQ,
  Schedule,
  Speaker,
  Sponsor,
  Team,
  Ticket,
  WelcomeBanner,
  CallForPapers,
} from "./data.type";

export const speakers = [] as const satisfies ReadonlyArray<Speaker>;

export const schedules: Schedule[] = [];

export const events = [] as const satisfies ReadonlyArray<Event>;

export const tickets = [
  {
    name: "Biznaguerofest",
    price: 12,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
      "Camiseta oficial del evento",
    ],
    isSoldOut: true,
  },
  {
    name: "Early Bird",
    price: 12,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
    ],
    notice: "¡Para los más rápidos!",
  },
] as const satisfies ReadonlyArray<Ticket>;

export const sponsors = [] as const satisfies ReadonlyArray<Sponsor>;

const faq = [
  {
    title: "¿Cuándo y dónde se llevará a cabo?",
    body: "El BiznagaFest se celebrará el 28 de octubre en la ETSI de Informática de la Universidad de Málaga. La dirección exacta es Bulevar Louis Pasteur, 35, 29071, Málaga.",
  },
  {
    title: "¿Cómo puedo registrarme para asistir?",
    body: "El proceso de registro para el BiznagaFest es sencillo. Simplemente dirígete a nuestro portal de entradas en Eventbrite y elige la opción correspondiente a tu categoría (público general o estudiante). Además, las 100 primeras entradas, tanto para el público general como para estudiantes, contarán con grandes descuentos.",
  },
  {
    title: "¿Qué tipo de charlas y temas se tratarán?",
    body: "En el BiznagaFest, contaremos con una amplia variedad de charlas y temas relacionados con la tecnología. Nuestros expertos abordarán temas como Frontend, Backend, DevOps, Ciberseguridad, Diseño de Interfaces y de Usuario, entre otros.",
  },
  {
    title: "¿Habrá oportunidades de networking?",
    body: "¡Absolutamente! El BiznagaFest brinda una excelente oportunidad para establecer contactos y conocer a otros profesionales y entusiastas de la tecnología y de la programación. Durante los descansos, habrá espacios designados para interactuar y compartir ideas con otros asistentes y patrocinadores.",
  },
  {
    title: "¿Se proporcionará comida y bebida?",
    body: "Sí, los asistentes podrán disfrutar de áreas de descanso y stands de comida para que puedas disfrutar de un refrigerio o una comida durante el BiznagaFest.",
  },
  {
    title: "¿Puedo cancelar mi registro y solicitar un reembolso?",
    body: "Lamentamos informarte que no se aceptarán cancelaciones ni se realizarán reembolsos una vez completado el registro. Sin embargo, si no puedes asistir al evento, te animamos a que nos lo comuniques para que podamos ofrecer tu lugar a otra persona interesada.",
  },
  {
    title: "¿Cómo puedo obtener más información sobre el BiznagaFest?",
    body: "Si tienes más preguntas o necesitas información adicional, no dudes en contactarnos a través de nuestro correo electrónico de contacto: biznagafest@gmail.com También puedes seguirnos en nuestras redes sociales para recibir las últimas actualizaciones y novedades sobre el evento.",
  },
] as const satisfies ReadonlyArray<FAQ>;

const raffles = [] as const satisfies ReadonlyArray<Raffle>;

const team = {
  organizers: [
    {
      name: "Jose Antonio Palacios",
      // TODO
      picture: "/team/jose-palacios.jpeg",
      position: "Software Engineer Lead, Vodafone",
      socials: {
        twitter: "https://twitter.com/JoseAntPR",
        github: "https://github.com/JoseAntpr",
        linkedin: "https://www.linkedin.com/in/joseantpalacios/",
      },
      descriptionInParagraphs: [],
    },
    {
      name: "Carlos Caballero",
      // TODO
      picture: "/team/carlos-caballero.jpeg",
      descriptionInParagraphs: [
        "Carlos Caballero González es ingeniero informático y doctor en informática de la Universidad de Málaga.",
        "Máster en Ingeniería de Software y en Inteligencia Artificial.",
        "Google Developer Experts en Angular.",
      ],
      position: "Angular Google Developer Expert (GDE)",
      socials: {
        twitter: "https://twitter.com/carlillo",
        website: "https://www.carloscaballero.io/",
        github: "https://github.com/caballerog",
        linkedin: "https://www.linkedin.com/in/carloscaballerogonzalez/",
        youtube: "https://www.youtube.com/c/DotTechES",
      },
    },
    {
      name: "Jose Barrera",
      // TODO
      picture: "/team/jose-barrera.jpeg",
      position: "Digital Product Designer at Fortris",
      socials: {
        twitter: "https://twitter.com/joseabarreram",
        linkedin: "https://www.linkedin.com/in/joseabarreram/",
      },
      descriptionInParagraphs: [],
    },
    {
      name: "David Rojo",
      picture: "/team/david-rojo.png",
      descriptionInParagraphs: [
        "David Rojo es un desarrollador de software especializado en tecnologías web como NestJs y Angular.",
        "Con gran interes en la comunidad y en proyectos open source.",
      ],
      position: "Software Developer, Max Gain Development",
      socials: {
        twitter: "https://twitter.com/davidrojom",
        website: "https://davidrojom.vercel.app/",
        github: "https://github.com/DavidRojoM",
        linkedin: "https://www.linkedin.com/in/davidrojom/",
      },
    },
    {
      name: "Daniel Olivet",
      // TODO
      picture: "/team/dani-olivet.jpeg",
      descriptionInParagraphs: [
        "Desarrollador de software malagueño.",
        "Estudió ASIR y por afición pura acabó desarrollando webs.",
        "Especializado en entornos LAMP, con gran interés en nuevas tecnologías y en clean code.",
      ],
      position: "Desarrollador Backend, Bulevip",
      socials: {
        linkedin: "https://www.linkedin.com/in/daniel-olivet-jimenez/",
        github: "https://github.com/daniolivet",
      },
    },
  ],
  staff: [],
} as const satisfies Team;

const welcomeBanner = {
  isEnabled: false,
} satisfies Readonly<WelcomeBanner>;

const callForPapers = {
  isEnabled: true,
  title: "C4P Is Open!",
  url: "https://docs.google.com/forms/d/e/1FAIpQLSdnl1WtSoc45u4H7OGJ-mGsq5iWB5T4GoKQotL2g8iJhJAYvQ/viewform",
} satisfies Readonly<CallForPapers>;

export const DATA: Data = {
  title: "BiznagaFest 2024",
  ticketsUrl: "https://www.tickettailor.com/events/biznagafest/1127407",
  date: new Date(2024, 9, 26),
  about: {
    descriptionInParagraphs: [
      'El BiznagaFest es el gran evento IT de la Costa del Sol para las comunidades "Google developers" de España, que se reúnen para ofrecer conferencias y workshops sobre Devops, Backend, Frontend, Chatbots, IA, Blockchain y soft skills.',
      "En su edición anterior asisitieron más de 500 personas a las 12 horas de ponencias y talleres.",
      "Por Biznaga fest han pasado grandes expertos que trabajan en las principales empresas tecnológicas nacionales e internacionales, como Google, Virus Total, Deloitte, Red Hat, Chainalysis, Sngular, entre otros.",
    ],
    socials: {
      instagram: "https://www.instagram.com/biznagafest/",
      twitter: "https://twitter.com/home",
      youtube: "https://www.youtube.com/@biznagafest",
    },
  },
  lastEdition: {
    gallery: [
      "/gallery/1.jpg",
      "/gallery/2.jpg",
      "/gallery/3.jpg",
      "/gallery/4.jpg",
      "/gallery/5.jpg",
    ],
  },
  venue: {
    address: "Campus de Teatinos, Blvr. Louis Pasteur, 35, 29010 Málaga",
    description: "",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.313861364173!2d-4.4811915018006445!3d36.715022691025084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72f74b9f3606f1%3A0x9fa32cc2e6b0bbf9!2sE.T.S.%20de%20Ingenier%C3%ADa%20Inform%C3%A1tica!5e0!3m2!1ses!2ses!4v1691019443359!5m2!1ses!2ses",
    pictures: [],
    title: "E.T.S de Ingeniería Informática",
    city: "Málaga",
    howToArrive: {
      howToArriveByBus: [
        "Línea 8 (Alameda Principal - Clínico) - Parada Hospital Clínico",
        "Línea 11 (Universidad - El Palo: P. Virginia) - Parada Louis Pasteur",
        "Línea 22 (Avda. de Moliere - Universidad) Parada Louis Pasteur",
        "Línea 25 (Paseo del Parque - Maqueda) - Parada  Andrés Llorden",
      ],
      howToArriveByBike: [
        "El Campus cuenta con un carril bici que comienza en el Paseo del Parque y llega al Boulevar Louis Pasteur",
      ],
      howToArriveByMetro: [
        "Línea 1 (Andalucía Tech - El Perchel) - Parada Hospital Clínico",
      ],
    },
  },
  previousEditions: [
    {
      name: "2017",
      url: "https://devfest17.gdgmalaga.dev/",
    },
    {
      name: "2018",
      url: "https://devfest18.gdgmalaga.dev/",
    },
    {
      name: "2019",
      url: "https://devfest19.gdgmalaga.dev/",
    },
    {
      name: "2021",
      url: "https://devfest21.gdgmalaga.dev/",
    },
    {
      name: "2022",
      url: "https://2022.biznagafest.com/",
    },
    {
      name: "2023",
      url: "https://2023.biznagafest.com/",
    },
  ],
  team,
  faq,
  tickets,
  sponsors,
  speakers,
  schedules,
  raffles,
  events,
  footerLinks: [
    {
      title: "Code Of Conduct",
      href: "/code",
    },
    {
      title: "GDG Málaga",
      href: "https://www.meetup.com/es-ES/google-developer-group-malaga/",
    },
    {
      title: "Google Developers",
      href: "https://developers.google.com/",
    },
  ],
  welcomeBanner,
  sponsorsDossier: {
    enabled: false,
    // en: "/documents/dossier-sponsors-es.pdf",
    // es: "/documents/dossier-sponsors-es.pdf",
  },
  callForPapers,
} as const satisfies Readonly<Data>;

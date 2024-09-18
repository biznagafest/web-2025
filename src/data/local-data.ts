import type {
  Data,
  Raffle,
  Event,
  FAQ,
  ScheduleItem,
  Speaker,
  Sponsor,
  Team,
  Ticket,
  WelcomeBanner,
  CallForPapers,
} from "./data.type";

export const speakers = [
  {
    name: "Jecelyn Yeen",
    position: "DevRel Engineer, Chrome",
    picture: "/speakers/jecelyn.jpg",
    description: `Jecelyn Yeen is a DevRel engineer at Google working on Chrome DevTools and Browser Automation.  

Her work focuses on understanding and activating the ecosystem around developer tooling.  

When she’s not coding (and avocado-ing), she’s jumping into mysterious sea waters in search of narwhals and mermaids.`,
    socials: {
      mail: "jec@google.com",
      mastodon: "https://indieweb.social/@jecfish",
      twitter: "https://twitter.com/jecfish",
    },
  },
  {
    name: "Bezael Pérez",
    position: "Lead Software Engineer",
    picture: "/speakers/bezael.jpg",
    description: "Divulgador de contenido.",
    socials: {
      mail: "bezael@gmail.com",
      youtube: "https://youtube.com/@dominicode",
      twitter: "https://twitter.com/domini_code",
    },
  },
  {
    name: "Leifer Mendez",
    position: "Front-end Developer",
    picture: "/speakers/leifer.jpg",
    description: "Apasionado de la tecnología y la divulgación de contenido.",
    socials: {
      youtube: "https://youtube.com/@LeiferMendez",
      twitter: "https://twitter.com/LeiferMendez",
    },
  },
  {
    name: "Carmen Ansio",
    position: "Freelance UX Engineer.",
    picture: "/speakers/carmen.jpg",
    description: `Mi nombre es Carmen Ansio y soy freelance UX Engineer.  

He trabajado en compañías increíbles diseñando e implementando productos digitales desde hace más de 10 años.  

Además formo parte del programa de Google GDE y comparto mi pasión sobre diseño y desarrollo web a diario en redes. Actualmente imparto formaciones y consultorías enfocadas en formación para perfiles de diseño y desarrollo web.`,
    socials: {
      mail: "carmenansio@gmail.com",
      twitter: "https://twitter.com/carmenansio",
    },
  },
  {
    name: "Álvaro López Sánchez",
    position: "R&D Engineer / Innovation, Fortris",
    picture: "/speakers/alvaro-lopez.jpeg",
    description: `+10 yrs of expertise as a software engineer in the video game industry.  

In recent years, I turned his attention to decentralized technologies in terms of cybersecurity and scalability.  

Now, I hold the position of R&D Engineer at Fortris and am pursuing a Ph.D. at the University of Malaga in decentralized technology and its cybersecurity implications.`,
    socials: {
      mail: "bluebycode@gmail.com",
      linkedin: "https://www.linkedin.com/in/bluebycode/",
    },
  },
  {
    name: "Irene M Morgado",
    position: "Head of Brand & Culture, Kairós Digital Solutions",
    picture: "/speakers/irene.jpg",
    socials: {
      mail: "irenemmorgado@gmail.com",
      linkedin: "https://www.linkedin.com/in/irenemmorgado/",
    },
  },
  {
    name: "Francisco Guerrero",
    position: "QA Manager & QA Coach",
    picture: "/speakers/fran-guerrero.jpeg",
    description: `
      Fran Guerrero es un especialista certificado en Agile ISTQB con más de 12 años de experiencia en el campo de la Calidad del Software.  

Implementa procesos de prueba, estrategias de control de calidad, herramientas innovadoras y construye relaciones sólidas en todos los equipos.Su objetivo siempre es que su equipo se convierta en una parte esencial del proceso de Calidad del Software"  

De vez en cuando, le gusta hablar en foros relacionados con QA y Testing sobre temas que incluyen Metodologías Ágiles, Test Automation y DevOps CI / CD.`,
    socials: {
      mail: "fran.guerrero.sanchez@gmail.com",
      linkedin: "https://www.linkedin.com/in/franguerrero/",
    },
  },
  {
    name: "Sasha Denisov",
    position: "Chief Software Engineer",
    picture: "/speakers/denisov.png",
    description: `Sasha is an experienced software developer with a rich background, in IT for more than 20 years.  

He worked with different stacks in backend, frontend and mobile fields, but since 2018 his main interest is Flutter.Sasha is a Chief Software Engineer and Head of Flutter Discipline in EPAM Systems.  

Also, he is Flutter and Dart GDE and Co- Organizer of Flutter Berlin community.`,
    socials: {
      mail: "denisov.shureg@gmail.com",
      twitter: "https://twitter.com/ShuregDenisov",
    },
  },
  {
    name: "Alix Martínez Martínez",
    position: "Design Leader, Miro",
    picture: "/speakers/alix.jpg",
    socials: {
      mail: "info@alixmzmz.eu",
      website: "https://www.alixmzmz.eu/",
      linkedin:
        "https://www.linkedin.com/in/alix-mart%C3%ADnez-mart%C3%ADnez-60037b19/",
    },
  },
  {
    name: "Juan Manuel Real Garry",
    position: "Product Design Manager, Miro",
    picture: "/speakers/juanreal.jpeg",
    socials: {
      mail: "pheurton@gmail.com",
      website: "https://juanreal.com/",
      linkedin: "https://www.linkedin.com/in/juanreal/",
    },
  },
  {
    name: "Albert Sunyer",
    position: "Technical Account Manager",
    picture: "/speakers/albert.jpeg",
    socials: {
      mail: "sunyer@google.com",
    },
  },
  {
    name: "Alba Rivas",
    position: "Principal Developer Advocate at Salesforce",
    picture: "/speakers/albarivas.jpeg",
    socials: {
      twitter: "https://twitter.com/AlbaSFDC",
      linkedin: "https://www.linkedin.com/in/alba-rivas/",
      mail: "alba.azconarivas@gmail.com",
    },
  },
] as const satisfies ReadonlyArray<Speaker>;

export const schedule: ScheduleItem[] = [
  {
    end: "9.15",
    kind: "break",
    start: "9.00",
    title: "Welcome",
    description: undefined,
    location: "Auditorio",
    subtitle: "Presentación y agradecimientos",
    type: undefined,
  },
  {
    end: "10.10",
    kind: "nobreak",
    start: "9.15",
    title: "From fast loading to instant loading",
    description:
      "Learn about the Speculation Rules API and how it allows for instant page loads and a near-zero Largest Contentful Paint.",
    location: "Auditorio",
    subtitle: "Barry Pollard",
    type: "lecture",
  },
  {
    end: "11.10",
    kind: "nobreak",
    start: "9.15",
    title: "Aprende Rust programando un shooter",
    description:
      "Aprende a crear un juego al estilo Wolfenstein usando Rust.  \n\nPara ello se dará a los asistentes el código del juego con algunas partes incompletas para que ellos las terminen. Así, se podrán tratar de forma aislada pero práctica algunos de los conceptos más importantes del lenguaje.",
    location: "Sala Talleres 1",
    subtitle: "Pablo Cumpián",
    type: "workshop",
  },
  {
    end: "11.10",
    kind: "nobreak",
    start: "9.15",
    title: "Y ahora, ¿qué? - el taller interactivo",
    description:
      "En este taller serán los y las asistentes quienes deciden en qué temas se profundizará, a medida que avancemos en las distintas áreas a tener en cuenta cuando buscas trabajo tech.  \n\nCon una introducción de contexto amena y practica, podrás elegir en vivo y en directo si mejorar tu perfil de LinkedIn, practicar que preguntas hacer a ti recruiters y como evaluar si ahora te encuentras en un lugar con perspectivas de crecimiento.",
    location: "Sala Talleres 2",
    subtitle: "Irene Morgado",
    type: "workshop",
  },
  {
    end: "11.10",
    kind: "nobreak",
    start: "10.15",
    title: "Effective Android App Monitoring in Production",
    description:
      "Your feature is complete and ready to be shipped to production. Now you can forget about it completely and move onto the next thing, right? Actually the fun begins when your feature reaches your users. Do they use it? And do they use it as you expected? What kind of issues are they experiencing? \n\nIn this session, we’ll discuss how to monitor Android apps in production to ensure they stand resilient and ready for the challenges of the real world. \n\nYou’ll learn how to design and report relevant events that matter to you and your team. Also, how to define KPIs (key performance indicators), processes and strategies for keeping a vigilant eye on user interactions, errors and app performance, by using tools like New Relic and Firebase. \n\nYou’ll see from real world examples how to track, detect and address production issues before they escalate. \n\nLevel up your app observability, delight your users and deliver with confidence with these tips. ",
    location: "Auditorio",
    subtitle: "Alejandra Stamato",
    type: "lecture",
  },
  {
    end: "11.10",
    kind: "nobreak",
    start: "10.15",
    title:
      "From Zero to AI Hero: Building Custom Solutions for Gmail, Drive & More",
    description:
      "Ready to build AI-powered solutions for Google Workspace? This session is your comprehensive guide. \n\nWe'll cover the essential tools, APIs, and best practices for developing extensions that seamlessly integrate with Gmail, Drive, Sheets, and more apps. ",
    location: "Track 2",
    subtitle: "Chanel Greco",
    type: "lecture",
  },
  {
    end: "12.00",
    kind: "break",
    start: "11.15",
    title: "☕ Coffee break",
    description: undefined,
    location: undefined,
    subtitle: "Recarguemos las pilas",
    type: undefined,
  },
  {
    end: "12.55",
    kind: "nobreak",
    start: "12.00",
    title:
      "Síndrome del impostor y cómo vencerlo con la inteligencia artificial",
    description:
      "Apasionada por la tecnología, la mente humana y su asociación práctica en el mundo del emprendimiento. \n\nMi investigación se ha centrado en la intersección entre la ansiedad, el estrés psicosomático y la programación, explorando cómo estos factores impactan en el rendimiento y bienestar de los profesionales tecnológicos. \n\nBusco colaborar en proyectos que integren de manera innovadora la tecnología, la psicología y el emprendimiento, con el objetivo de impulsar soluciones creativas y humanas en el mundo digital. ",
    location: "Auditorio",
    subtitle: "Mariana Rolfo",
    type: "lecture",
  },
  {
    end: "12.55",
    kind: "nobreak",
    start: "12.00",
    title:
      "Componetización eficiente: clave para un desarrollo frontend sostenible",
    description:
      "En esta charla, exploraremos la importancia de desarrollar componentes de manera eficiente para asegurar la sostenibilidad en el desarrollo frontend. \n\nA través de ejemplos prácticos con React y Vue, discutiremos las mejores prácticas para crear componentes reutilizables y mantenibles. \n\nAbordaremos principios clave como la separación de responsabilidades, la modularidad y la consistencia en el diseño de sistemas.  \n\nAdemás, veremos cómo una correcta componentización puede mejorar la escalabilidad, el rendimiento y la colaboración en equipos de desarrollo. ",
    location: "Track 2",
    subtitle: "Manu Rodríguez",
    type: "lecture",
  },
  {
    end: "13.55",
    kind: "nobreak",
    start: "12.00",
    title: "Web Performance Testing",
    description:
      "Que la Web Performance es un tema que impacta a la experiencia de usuarias/os, al posicionamiento SEO y, por tanto, a las visitas, y a las métricas de negocio, es una realidad. Conocer las métricas de Web Performance más relevantes y poder testearlas en cada pase que hacemos a producción nos ahorrarán muchos problemas. \n\nEn este taller te contaremos cómo configurar e implementar un sistema automatizado para testear la Web Performance con Lighthouse CI, así como analizar las Core Web Vitals con Cypress/Playwright/Puppeteer y conseguir así no degradar la UX de nuestro producto. ",
    location: "Sala Talleres 1",
    subtitle: "Joan León",
    type: "workshop",
  },
  {
    end: "13.55",
    kind: "nobreak",
    start: "12.00",
    title: "Setup your mesh with Istio and Kiali",
    description:
      "En este taller los asistentes aprenderan a configurar Istio con Kiali y a como convivir con este entorno, aprenderan que les aporta y los beneficios que se obtienen a nivel de seguridad y observabilidad. ",
    location: "Sala Talleres 2",
    subtitle: "Alberto Gutiérrez y Josune Córdoba",
    type: "workshop",
  },
  {
    end: "15.30",
    kind: "break",
    start: "14.00",
    title: "Almuerzo",
    description: undefined,
    location: "Almuerzo",
    subtitle: "¡Prepárate para la paella!",
    type: undefined,
  },
  {
    end: "16.25",
    kind: "nobreak",
    start: "15.30",
    title: "Diseño y evaluación de sistemas guiados por pruebas de rendimiento",
    description:
      "Introducción al diseño de sistemas teniendo en cuenta distintos requisitos y cómo optimizarlos y evolucionarlos basándonos en pruebas de rendimiento.  \n\nVeremos cómo proponer y probar soluciones, monitorizarlas, organizar nuestro código y evitar optimizaciones prematuras. \n\nTambién veremos cómo preparar nuestros sistemas para que escalen automáticamente y cómo presentar los resultados y mejoras en un lenguaje de negocio. ",
    location: "Auditorio",
    subtitle: "Ramón Lence",
    type: "lecture",
  },
  {
    end: "16.25",
    kind: "nobreak",
    start: "15.30",
    title: "Una mirada profunda a los asistentes de IA en tu móvil",
    description:
      "Descubre las bases de prompt engineering y como la IA puede ser una pieza clave para tus usuarios en el desarrollo de aplicaciones móviles. ",
    location: "Track 2",
    subtitle: "David San Martín",
    type: "lecture",
  },
  {
    end: "17.25",
    kind: "nobreak",
    start: "15.30",
    title: "Agile Product Management. Product Discovery",
    description:
      "Product discovery and its place it agile product management. Product discovery is an important process for building the product, as it is the process of understanding customers' needs and business context. ",
    location: "Sala Talleres 1",
    subtitle: "Alina Sazonova",
    type: "workshop",
  },
  {
    end: "17.25",
    kind: "nobreak",
    start: "15.30",
    title: "DDD+Refactoring: Enriquece tu dominio en pequeños pasos",
    description:
      "Taller sobre fundamentos de Domain driven design (táctico) y Refactoring. ",
    location: "Sala Talleres 2",
    subtitle: "Pedro Pardal",
    type: "workshop",
  },
  {
    end: "17.25",
    kind: "nobreak",
    start: "16.30",
    title: "Generative AI y Firebase para crear tu web app",
    description:
      "En esta charla, exploraremos cómo las últimas herramientas de inteligencia artificial, desde Gemini API hasta Genkit, están revolucionando el desarrollo de aplicaciones modernas, permitiéndonos construirlas de manera más rápida y sencilla. \n\nAprenderemos a implementar estas poderosas tecnologías utilizando Firebase en aplicaciones web. Además, realizaremos demostraciones de live coding en vivo, donde veremos paso a paso cómo integrar estas herramientas para optimizar tus proyectos. \n\nDescubramos cómo la IA generativa puede transformar tu flujo de trabajo y llevar tus aplicaciones al siguiente nivel. ",
    location: "Auditorio",
    subtitle: "Laura Morinigo",
    type: "lecture",
  },
  {
    end: "17.45",
    kind: "break",
    start: "17.30",
    title: "☕ Coffee break",
    description: undefined,
    location: undefined,
    subtitle: "Último empujón",
    type: undefined,
  },
  {
    end: "18.40",
    kind: "nobreak",
    start: "17.45",
    title: "¿Qué es un Tech Lead?",
    description:
      "Tech Leads, Staffs, Principal y puestos similares se alcanzan en una empresa una vez alcanzada cierta seniority.Sin embargo llegar a esos puestos requiere de mucho más que ser bueno técnicamente. \n\nEstas expectativas son a menudo ambiguas y poco definidas, en esta charla veremos en profundidad y con ejemplos cuáles son las expectativas que todas las empresas tienen para  estas posiciones. ",
    location: "Auditorio",
    subtitle: "Félix López",
    type: "lecture",
  },
  {
    end: "19.00",
    kind: "break",
    start: "18.45",
    title: "✨ CLAUSURA",
    description: undefined,
    location: "Auditorio",
    subtitle: "¡Sorpresas!",
    type: undefined,
  },
];

export const events = [
  {
    name: "Modern Web Debugging",
    description: `Few developers enjoy debugging, and debugging can be complex for modern web apps because of the multiple frameworks, languages, and libraries used. But, developer tools have come a long way in making the process easier.  

In this talk, Jecelyn will dig into the modern state of debugging, improvements in DevTools, and how you can use them to reliably debug your apps.`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Jecelyn Yeen"],
    language: "English",
  },
  {
    name: "El Presente y el Futuro Inminente del Frontend: Perspectivas y Predicciones",
    description: `En esta charla dinámica, exploraremos las tendencias actuales y las previsiones futuras del desarrollo frontend.  

Con un enfoque especial en los frameworks, herramientas y técnicas emergentes, analizaremos cómo estas innovaciones están redefiniendo las capacidades y responsabilidades del desarrollo frontend.  

Esta charla es imprescindible para desarrolladores, diseñadores y todos aquellos interesados en la dirección futura del diseño web y la programación frontend.`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Bezael Pérez", "Leifer Mendez"],
    language: "Español",
  },
  {
    name: "✨ Haz magia con CSS",
    description: `En la charla veremos hechizos de magia a modo de snippets de código CSS variados, desde arte con CSS, ilusiones ópticas, un videojuego funcional, interfaces animadas, funciones en CSS, elementos de html con los que tener funcionalidades de saque en el navegador sin necesidad de JS...`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Carmen Ansio"],
    language: "Español",
  },
  {
    name: "Under the Hood of Decentralized Technology: Examining Scalability and Security",
    description: `This talk examines everything no one tells you about blockchain as a decentralized distributed system: challenges of balancing security and scalability.  

It covers the costs of improving performance, known challenges in blockchain platforms, and the issue of centralization in decentralized systems.  

It visits the known-unknown security attacks case per case.`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Álvaro López Sánchez"],
    language: "Español",
  },
  {
    name: "A Developer Journey",
    description: `¿Sabes qué además de la UX existe toda una ciencia detrás de la Experiencia de Developers y otras personas que trabajan en empresas tech?  

Si tu empresa "presume" de cuidar bien a quienes trabajan en ella, seguro que tiene expertas y expertos en #EX(Employee Xperience) que trabajan para que tu día a día y la cultura de tu organización sea un éxito...o deberían.`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Irene M Morgado"],
    language: "Español",
  },
  {
    name: "API Testing con herramientas CI/CD",
    description: `Las pruebas de API han sido un desafío para los probadores y herramientas como Postman han facilitado esta tarea gracias a la creación manual de colecciones de solicitudes. Pero, ¿cómo podemos configurar pruebas automatizadas de API usando Postman y lanzar estas pruebas en contenedores? No solo eso, sino también integrarlos en nuestras canalizaciones de CI/CD.  

En esta charla, Fran Guerrero explorará 3 puntos clave en la automatización de pruebas API con herramientas habituales como Postman: es decir, la creación de pruebas automatizadas desde Postman, cómo ejecutar tus recopilaciones de solicitudes y sus pruebas automatizadas usando Docker, así como los contenedores adecuados.para ellos y cómo las pruebas de API se integran en una canalización de CI / CD de una manera sencilla usando GitlabCI.`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "workshop",
    speakers: ["Francisco Guerrero"],
    language: "Español",
  },
  {
    name: "Compose Flutter Modules in your Android App",
    description: `Explore the process of embedding Flutter into existing Android applications in this live coding session.  

Learn how to seamlessly integrate Flutter with your native code, rendering multiple Flutter modules on a single screen and incorporating them into a Jetpack Compose hierarchy.  

Discover the techniques and best practices for successfully integrating Flutter into your Android app.Join us for this informative session and level up your app development skills.
    `,
    durationInMinutes: 45,
    place: "auditorium",
    type: "workshop",
    speakers: ["Sasha Denisov"],
    language: "English",
  },
  {
    name: "Creatividad en la era de la IA: ¿Existe realmente la posibilidad de ser original?",
    description: `En esta charla profundizaremos en analíticas, anécdotas, caminos, herramientas prácticas y personas detrás del #EX, hablando concretamente del sector Tech.`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Juan Manuel Real Garry", "Alix Martínez Martínez"],
    language: "Español",
  },
  {
    name: "ML API Skills",
    description: `In this game you will combine Vision API, Translation API, and Natural Language API, analyze images with the Vision API, perform text analysis with the Cloud Natural Language API, and use Kubernetes and Cloud Vision API to classify images from Reddit's /r/aww subreddit and displayed the results in a web app.`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "workshop",
    speakers: ["Albert Sunyer"],
    language: "Español",
  },
  {
    name: "¿Salesforce Developer?¿Quééé?",
    description: `El rol de Salesforce Developer está altamente demandado en el mercado laboral, pero a la vez, es un gran desconocido.

En esta sesión os contaré a qué se dedica un Salesforce Developer, veremos qué lenguajes y herramientas se utilizan para crear aplicaciones en Salesforce, y, desde mi experiencia personal, os contaré las ventajas y retos que os podéis encontrar en el camino.`,
    durationInMinutes: 45,
    place: "auditorium",
    type: "lecture",
    speakers: ["Alba Rivas"],
    language: "Español",
  },
] as const satisfies ReadonlyArray<Event>;

export const tickets = [
  {
    name: "Estudiante",
    price: 8.5,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
    ],
  },
  {
    name: "General",
    price: 18,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
    ],
  },
  {
    name: "Summer",
    price: 15.5,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
    ],
    isSoldOut: true,
  },
  {
    name: "Early Bird",
    price: 14,
    url: "https://example.com/ticket1",
    perks: [
      "Acceso al área reservado de patrocinadores",
      "Coffee Break (varios)",
      "Almuerzo",
      "Café durante todo el día",
      "Regalos valorados en 15€",
      "Sorteos valorados en 300€",
    ],
    isSoldOut: true,
  },
] as const satisfies ReadonlyArray<Ticket>;

export const sponsors = [
  {
    hasFeaturedPage: true,
    name: "Fortris",
    picture: "/sponsors/fortris.svg",
    tier: "gold",
    url: "https://fortris.com",
    description: `Lorem ipsum dolo
    r sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate dignissim suspendisse in est ante.  
Id volutpat lacus laoreet non curabitur gravida. Tincidunt augue interdum velit euismod. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Eleifend donec pretium vulputate sapien. Mi bibendum neque egestas congue quisque egestas. Sed risus ultricies tristique nulla aliquet enim tortor.  

Interdum consectetur libero id faucibus nisl tincidunt eget. Vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt. Sed pulvinar proin gravida hendrerit.`,
    socials: {
      website: "https://fortris.com",
    },
    jobOffers: [
      {
        title: "Frontend Developer",
        url: "https://google.com",
        description: `We are looking for a frontend developer in technology stack Angular, React, Vue, etc.  

2 years of experience required.`,
      },
      {
        title: "Frontend Developer",
        url: "https://google.com",
        description: `We are looking for a frontend developer in technology stack Angular, React, Vue, etc.  

2 years of experience required.`,
      },
      {
        title: "Frontend Developer",
        url: "https://google.com",
        description: `We are looking for a frontend developer in technology stack Angular, React, Vue, etc.  

2 years of experience required.`,
      },
      {
        title: "Frontend Developer",
        url: "https://google.com",
        description: `We are looking for a frontend developer in technology stack Angular, React, Vue, etc.  

2 years of experience required.`,
      },
    ],
  },
] as const satisfies ReadonlyArray<Sponsor>;

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

const raffles = [
  {
    picture: "/fallback/person.png",
    description: `¡La fiesta de clausura se acerca! 🚀 En nuestro Kahoot tech, no solo te divertirás, sino que también tendrás la oportunidad de ganar libros de programación increíbles que impulsarán tu conocimiento en el mundo de la tecnología. 📚  

Si eres un entusiasta de la tecnología, este evento es simplemente imprescindible. 💻🎉 Imagina una tarde llena de emoción, risas y desafíos mientras compites con otros amantes de la tecnología en un Kahoot que pondrá a prueba tus conocimientos y habilidades. Pero eso no es todo, ¡también hay premios en juego!  

Asegura tu lugar y prepárate para una experiencia única que te llevará a casa no solo con recuerdos, sino también con conocimientos tecnológicos adicionales. ¡No te lo puedes perder!`,
  },
] as const satisfies ReadonlyArray<Raffle>;

const team = {
  organizers: [
    {
      name: "Jose Antonio Palacios",
      // TODO
      picture: "/fallback/person.png",
      position: "Software Engineer Lead, Vodafone",
      socials: {
        twitter: "https://twitter.com/JoseAntPR",
        github: "https://github.com/JoseAntpr",
        linkedin: "https://www.linkedin.com/in/joseantpalacios/",
      },
    },
    {
      name: "Carlos Caballero",
      // TODO
      picture: "/fallback/person.png",
      description: `Carlos Caballero González es ingeniero informático y doctor en informática de la Universidad de Málaga.  

Máster en Ingeniería de Software y en Inteligencia Artificial.  

Google Developer Experts en Angular.`,
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
      picture: "/fallback/person.png",
      position: "Digital Product Designer at Fortris",
      socials: {
        twitter: "https://twitter.com/joseabarreram",
        linkedin: "https://www.linkedin.com/in/joseabarreram/",
      },
    },
    {
      name: "David Rojo",
      picture: "/team/david-rojo.png",
      description: `David Rojo es un desarrollador de software especializado en tecnologías web como NestJs y Angular.  

Con gran interes en la comunidad y en proyectos open source.`,
      position: "Software Developer, Max Gain Development",
      socials: {
        twitter: "https://twitter.com/davidrojom",
        website: "https://davidrojom.vercel.app/",
        github: "https://github.com/DavidRojoM",
        linkedin: "https://www.linkedin.com/in/davidrojom/",
      },
    },
    {
      name: "Inma Ortega",
      // TODO
      picture: "/fallback/person.png",
      description: `Graduada en periodismo, es técnica en Comunicación Corporativa, PR y especialista en Social Media Marketing.  

Tiene un gran interes sobre sector tecnológico, que tan en boga está en Málaga y está siendo un revulsivo en el tejido social y económico en la provincia.`,
      position: "Community Manager, ComparteMedios",
      socials: {
        linkedin: "https://www.linkedin.com/in/inmaculadaortegamartin/",
      },
    },
    {
      name: "Daniel Olivet",
      // TODO
      picture: "/fallback/person.png",
      description: `Desarrollador de software malagueño.  

Estudió ASIR y por afición pura acabó desarrollando webs.  

Especializado en entornos LAMP, con gran interés en nuevas tecnologías y en clean code.`,
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
  url: "https://google.com",
} satisfies Readonly<CallForPapers>;

export const LOCALDATA: Data = {
  title: "BiznagaFest 2023",
  ticketsUrl:
    "https://www.eventbrite.es/e/entradas-biznagafest-2023-638556609007",
  date: new Date(2023, 9, 28),
  description: `El BiznagaFest es el gran evento IT de la Costa del Sol para las comunidades "Google developers" de España, que se reúnen para ofrecer conferencias y workshops sobre Devops, Backend, Frontend, Chatbots, IA, Blockchain y soft skills.  

En su edición anterior asisitieron más de 500 personas a las 12 horas de ponencias y talleres.  

Por Biznaga fest han pasado grandes expertos que trabajan en las principales empresas tecnológicas nacionales e internacionales, como Google, Virus Total, Deloitte, Red Hat, Chainalysis, Sngular, entre otros.
  `,
  socials: {
    instagram: "https://www.instagram.com/biznagafest/",
    twitter: "https://twitter.com/BiznagaFest",
    youtube: "https://www.youtube.com/@biznagafest",
    linkedin: "https://www.linkedin.com/company/biznagafest/",
    mail: "biznagafest@gmail.com",
  },
  lastEdition: {
    gallery: [],
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
      howToArriveByBus: `- Línea 8 (Alameda Principal - Clínico) - Parada Hospital Clínico.  
- Línea 11 (Universidad - El Palo: P. Virginia) - Parada Louis Pasteur.  
- Línea 22 (Avda. de Moliere - Universidad) Parada Louis Pasteur.  
- Línea 25 (Paseo del Parque - Maqueda) - Parada  Andrés Llorden.`,
      howToArriveByBike: `- El Campus cuenta con un carril bici que comienza en el Paseo del Parque y llega al Boulevar Louis Pasteur.`,
      howToArriveByMetro: `- Línea 1 (Andalucía Tech - El Perchel) - Parada Hospital Clínico`,
    },
  },
  companyTicketsNotice: {
    enabled: true,
    title: "¿Eres una empresa?",
    description:
      "¿Representas a una empresa y deseas adquirir entradas para tus empleados? Contáctanos a través de nuestro correo electrónico: **biznagafest@gmail.com**",
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
  ],
  team,
  faq,
  tickets,
  sponsors,
  speakers,
  schedule,
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
    enabled: true,
    en: "/documents/dossier-sponsors-es.pdf",
    es: "/documents/dossier-sponsors-es.pdf",
  },
  callForPapers,
  hallOfFame: [],
} as const satisfies Readonly<Data>;

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  testimonial1,
  testimonial2,
  project1,
  project3,
  project2
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Mobile App Development",
    icon: mobile,
  },
  {
    title: "DApp Development",
    icon: backend,
  },
  {
    title: "SmartContract Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Development",
    company_name: "Team HloDev",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developed and maintained web applications using React, Redux, and TypeScript",
      "Implemented responsive and user-friendly UI components with React Hooks and Material-UI",
      "Collaborated with backend developers and designers to ensure high-quality and consistent user experience",
      "Utilized Git and GitHub for version control and code review",
      "Utilized Git and GitHub for version control and code review"
    ],
  },
  {
    title: "Mobile Apps Development",
    company_name: "Team HloDev",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "We are a team of developers who specialize in creating beautiful and functional mobile apps using React Native or Flutter.",
      "We have experience in developing apps with complex workflows and backend integration, such as e-commerce, social media, and productivity tools.",
      "We are passionate about delivering high-quality products that meet the needs and expectations of our clients and users.",
      "We use agile methodologies and best practices to ensure timely and efficient delivery of our projects.",
      "We are always eager to learn new technologies and skills to enhance our app development capabilities."
    ],
  },
  {
    title: "Dapp Development",
    company_name: "Team HloDev",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "Experienced in developing secure and scalable web3 applications on Ethereum and Solana blockchains",
      "Skilled in using Solidity, Rust, React and other web development tools and frameworks",
      "Created and launched several NFT collections and marketplaces with high security and user-friendly features",
      "Passionate about blockchain technology and its potential to revolutionize various industries and domains",
    ],
  },
  {
    title: "Smart Contract Development",
    company_name: "Team HloDev",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developed and deployed web3 applications with high security and scalability standards",
      "Implemented smart contracts for various level 1 blockchains, such as Ethereum and Solana",
      "Leveraged cutting-edge technologies and frameworks to optimize performance and user experience",
      "Collaborated with clients and stakeholders to deliver solutions that meet their needs and expectations",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Outstanding work! Crypto Capita transformed our website into a modern and user-friendly platform. Highly recommended!",
    name: "Balaskandan",
    designation: "Manging Director",
    company: "Capital Groups",
    image: testimonial1,
  },
  {
    testimonial:
      "Impressive mobile app development! Crypto Capita exceeded our expectations in terms of functionality and design. Thank you Great work!",
    name: "Arun Prakash",
    designation: "CEO",
    company: "P2lkini solution",
    image: testimonial2,
  },
  {
    testimonial:
      "We were in search of a development team that could handle the complexities of crypto payment integration. Crypto Capita not only met our expectations but exceeded them. ",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "HIGHTER",
    description:
      "HIGHTER is a project aimed at helping high school students make decisions about college admissions. This model leverages various data points and predictive algorithms to estimate the likelihood of a student's acceptance into different colleges",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ship Cart",
    description:
      "Ship Cart online platform that facilitates the buying and selling of products over internet. It serves as a virtual marketplace individuals can showcase their offerings and customers can browse, select, and purchase items conveniently.",
   tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "Dash Blog",
    description:
      "Dash Blog is an online platform that allows individuals, known as bloggers, to create and publish their own content in the form of articles, essays, personal stories, or informative pieces. It serves as a virtual space where bloggers around the world.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

// import images
import Hero_person from "./assets/images/Hero/person.png";

import ae from "./assets/images/Skills/ae.png";
import ai from "./assets/images/Skills/ai.png";
import aid from "./assets/images/Skills/aid.png";
import alr from "./assets/images/Skills/alr.png";
import ame from "./assets/images/Skills/ame.png";
import apr from "./assets/images/Skills/apr.png";
import aps from "./assets/images/Skills/aps.png";
import axd from "./assets/images/Skills/axd.png";
import c4d from "./assets/images/Skills/c4d.png";

import brand from "./assets/images/Services/branddesign.png";
import models from "./assets/images/Services/3dmodel.png";
import edit from "./assets/images/Services/editdesign.png";
import ilustration from "./assets/images/Services/ilustration.png";
import photoedition from "./assets/images/Services/photoedition.png";
import uidesign from "./assets/images/Services/uidesign.png";

import project1 from "./assets/images/Skills/ae.png";
import project2 from "./assets/images/Skills/ae.png";
import project3 from "./assets/images/Skills/ae.png";
import person_project from "./assets/images/Projects/projexts_person.png";

import esterio from "./assets/images/Testimonials/esterio.png";
import martin from "./assets/images/Testimonials/martin.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

var cv = "http://localhost:5173/src/assets/cv/cv.pdf";
//var cv = "https://portafolio-ernesto.vercel.app/src/assets/cv/cv.pdf"; //prod

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Dise??ador Gr??fico",
    firstName: "Ernesto",
    LastName: "Garc??a",
    btnText: "Cont??ctame",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "a??os de experiencia",
      },
      {
        count: "20+",
        text: "proyectos trabajados en mi carrera",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    subtitle: "Mi top de habilidades",
    skills_content: [
      {
        name: "Adobe Illustrator",
        para: "Dibujo vectorial y dise??o de marca",
        logo: ai,
      },
      {
        name: "Adobe Photoshop",
        para: "Edici??n fotogr??fica e ilustraci??n",
        logo: aps,
      },
      {
        name: "Adobe Lightroom",
        para: "Edici??n fotogr??fica",
        logo: alr,
      },
      {
        name: "Adobe InDesign",
        para: "Dise??o Editorial (web e impresi??n)",
        logo: aid,
      },
      {
        name: "Adobe Xd",
        para: "Dise??o UI / UX",
        logo: axd,
      },
      {
        name: "Adobe After Effects",
        para: "Animaci??n y edici??n de video",
        logo: ae,
      },
      {
        name: "Adobe Premiere",
        para: "Edici??n de video",
        logo: apr,
      },
      {
        name: "Adobe Media Encoder",
        para: "Transferencia y codificaci??n de video",
        logo: ame,
      },
      {
        name: "Cinema 4D",
        para: "Dise??o y animaci??n 3D",
        logo: c4d,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Servicios",
    subtitle: "Lo que puedo hacer",
    service_content: [
      {
        title: "Dise??o de marca",
        para: "Experiencia en el Dise??o de marca y todo lo relacionado al branding y el marketing.",
        logo: brand,
      },
      {
        title: "Ilustraci??n",
        para: "Experiencia en el mundo del cartel y la ilustraci??n, donde he obtenido reconocimientos en varios concursos.",
        logo: ilustration,
      },
      {
        title: "Dise??o Editorial",
        para: "Dise??o de libros, revistas, peri??dicos, folletos, carteles publicitarios y tarjetas de presentaci??n.",
        logo: edit,
      },
      {
        title: "Dise??o UI / UX",
        para: "Experiencia en el dise??o de interfaz y experiencia del usuario. (Dise??o Web, software y aplicaciones m??viles).",
        logo: uidesign,
      },
      {
        title: "Edici??n de fotos",
        para: "Experiencia en la edici??n fotogr??fica, y en el montaje e ilustraci??n de im??genes fotogr??ficas.",
        logo: photoedition,
      },
      {
        title: "Modelado en 3D",
        para: "He incursionado en el modelado en 3D, principalmente para artistas.",
        logo: models,
      }
    ],
  },
  Projects: {
    cv:cv,
    title: "Projects",
    downloadTitle:"Descarga mi portafolio",
    downloadDescription:"Toda clase de soluciones gr??ficas a sus necesidades como cliente.",
    downloadButtonTxt:"Descargar PDF",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonios",
    subtitle: "Opiniones de mis clientes",
    testimonials_content: [
      {
        review:
          "???Trabaj?? con Ernesto por m??s dos a??os. Como artista visual, puedo afirmar que domina una amplia gamma del Dise??o Gr??fico. En la esfera bidimensional y tridimensional.???",
        img: esterio,
        name: "Esterio segura mora (artista visual)",
      },
      {
        review:
          "???Trabaj?? con Ernesto por m??s dos a??os. Como artista visual, puedo afirmar que domina una amplia gamma del Dise??o Gr??fico. En la esfera bidimensional y tridimensional.???",
        img: martin,
        name: "Alberto Mart??n (Ingeniero de Software)",
      }
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  Footer: {
    text: "All ?? Copy Right Reserved 2022",
  },
};

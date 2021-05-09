import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const projectsArray = [
  {
    id: 0,
    name: "Eyechart Online Web App",
    techStack: [
      "React",
      "Redux",
      "React Router",
      "Styled Components",
      "Firebase Authentication",
      "Firebase Realtime Database",
      "Google Cloud Functions",
      "Netlify"
    ],
    description:
      "Eyechart Online is a modern web application written for optometrists and ophthalmologists. It includes various tests and charts used by eye care professionals when evaluating a persons visual skills and abilities. It replaces the static bulb projector normally used by optometrists for displaying charts but it also includes a whole range of other tests used for assessing visual skills. It includes user authentication, a firebase realtime database for user management and licence subscription management. It also includes a custom Payfast payment gateway integration for subscription payments.",
    image: (
      <StaticImage
        src="../images/projects/01.jpg"
        alt="Eyechart Online Web Application"
        placeholder="dominantColor"
        layout="fixed"
        width={350}
        height={219}
      />
    ),
  },
  {
    id: 1,
    name: "Sharescreen",
    techStack: [
      "React",
      "Gatsby V3",
      "Styled Components",
      "Strapi Headless CMS",
      "PostgreSQL",
      "Netlify",
      "Heroku"
    ],
    description:
      "This project is still in active development. Sharescreen is a platform which connects people who are leaders in their particular field to students for virtual talks, presentations and discussions. It is focused in the areas of nature and conservation and targeted towards the African continent. Speakers donate their time for presentations and questions and academic institutions sign up to request a presentation by a speaker on his or her area of expertise within the conservation landscape. It was built with React and Gatsby and utilises Strapi with a PostgreSQL database as a headless CMS to store the catalogue of speakers, and presentations.",
    image: (
      <StaticImage
        src="../images/projects/02.png"
        alt="Eyechart Online Web Application"
        placeholder="dominantColor"
        layout="fixed"
        width={350}
        height={219}
      />
    ),
  },
  {
    id: 2,
    name: "Eyechart Online Website",
    techStack: ["React", "Gatsby V3", "Styled Components", "Netlify"],
    description:
      'This is the custom designed web site for the Eyechart Online web application. It utilises React, Gatsby V3, "Styled Components',
    image: (
      <StaticImage
        src="../images/projects/03.png"
        alt="Eyechart Online Web Application"
        placeholder="dominantColor"
        layout="fixed"
        width={350}
        height={219}
      />
    ),
  },
  {
    id: 3,
    name: "Moramba Self Catering",
    techStack: ["React", "Gatsby V3", "Styled Components", "Firebase", "Netlify"],
    description:
      "A custom designed web site for a Self Catering Accommodation establishment. It is set up so the client can update the content themselves in terms of adding units, pictures, updating prices and descriptions etc. It utilises React, Gatsby, Styled Components and Firebase Realtime Database",
    image: (
      <StaticImage
        src="../images/projects/04.png"
        alt="Eyechart Online Web Application"
        placeholder="dominantColor"
        layout="fixed"
        width={350}
        height={219}
      />
    ),
  },
  {
    id: 4,
    name: "Developer Portfolio",
    techStack: ["React", "Gatsby V3", "Styled Components", "Netlify"],
    description:
      "This is my dev protfolio site that I put together in a day",
    image: (
      <StaticImage
        src="../images/projects/05.png"
        alt="Developer Portfolio Site"
        placeholder="dominantColor"
        layout="fixed"
        width={350}
        height={219}
      />
    ),
  },
];

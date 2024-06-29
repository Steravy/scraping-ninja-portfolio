import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "../../public/corpcomment.png";
import rmtdevImg from "../../public/rmtdev.png";
import wordanalyticsImg from "../../public/wordanalytics.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";

export const links = [
  {
    name: "Intro",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Handy Leads",
    description:
      "Web scraper that collected 265k+ leads from Angi.com, including company name, phone, email, and address.",
    tags: ["NodeJs", "PostgreSQL", "Typescript", "NextJs"],
    imageUrl: corpcommentImg,
  },
  {
    title: "AI Tools Webdirectory",
    description:
      "Bot specialized in scraping AI tools from the web. Retrieves tool data and categorizes by niche and use case.",
    tags: ["NodeJs", "PostgreSQL", "Typescript", "NextJs"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Jod Data API",
    description:
      "Custom bot retrieves job data from company career pages and updates job boards every 12 or 24 hours.",
    tags: ["NodeJs", "PostgreSQL", "Typescript", "Python", "FastAPI"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "FastAPI",
  "Framer Motion",
] as const;

export const footerLinks = [
  {
    icon: React.createElement(FaGithub),
    link: "https://github.com/Steravy"
  },
  {
    icon: React.createElement(FaLinkedin),
    link: "https://www.linkedin.com/in/stefan-vit%C3%B3ria-391924261/"
  },
  {
    icon: React.createElement(FaTwitter),
    link: "https://twitter.com/Ste_ravy"
  },
] as const;
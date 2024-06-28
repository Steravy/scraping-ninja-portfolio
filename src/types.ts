import { links } from "@/lib/static-data";

export type Section = typeof links[number]["name"];

export type Theme = "light" | "dark";

export enum Themes {
    LIGHT = "light",
    DARK = "dark"
}

export enum SectionIds {
    Intro = "home",
    About = "about",
    Projects = "projects",
    Skills = "skills",
    Experience = "experience",
    Contact = "contact",
};
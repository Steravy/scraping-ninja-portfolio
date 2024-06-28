import { links } from "@/lib/static-data";

export type Section = typeof links[number]["name"];

export type Theme = "light" | "dark";

export enum Themes {
    LIGHT = "light",
    DARK = "dark"
}

export const SocialLinks = {
    TWITTER: process.env.TWITTER_PROFILE as string,
    LINKEDIN: process.env.LINKEDIN_PROFILE as string,
    GITHUB: process.env.GITHUB_PROFILE as string
};

export enum SectionIds {
    Intro = "home",
    About = "about",
    Projects = "projects",
    Skills = "skills",
    Experience = "experience",
    Contact = "contact",
};
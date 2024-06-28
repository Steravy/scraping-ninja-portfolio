import { links } from "@/lib/static-data";

export type Section = typeof links[number]["name"];

export type Theme = "light" | "dark";

export enum Themes {
    LIGHT = "light",
    DARK = "dark"
}

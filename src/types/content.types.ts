import { ReactNode } from "react";

export interface SocialIcon {
  name: string;
  icon: string;
  link: string;
}

export type Social = SocialIcon[];

export interface Home {
  path: string;
  image: string;
  label: string;
  title: string;
  description: string;
  headline: ReactNode;
  subline: ReactNode;
}

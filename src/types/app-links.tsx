import { LinkType } from "@/lib/link-types";
import { IconType } from "react-icons";

interface AppLinks {
  label: string;
  baseUrl: string;
  type: LinkType;
  icon?: IconType;
}

interface FooterLinks {
  label: string;
  links: AppLinks[];
}

export type { AppLinks, FooterLinks };

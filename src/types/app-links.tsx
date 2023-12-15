import { LinkType } from "@/lib/link-types";

interface AppLinks {
  label: string;
  baseUrl: string;
  type: LinkType;
}

interface FooterLinks {
  label: string;
  links: AppLinks[];
}

export type { AppLinks, FooterLinks };

interface AppLinks {
  label: string;
  baseUrl: string;
  type: string; // @Todo refactor this
}

interface FooterLinks {
  label: string;
  links: AppLinks[];
}

export type { AppLinks, FooterLinks };

import { FooterLinks } from "@/types/app-links";
import  Typography  from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import Container  from "@/ui/components/container/container";
import { footerLinks } from "./app-links";
import ActiveLink from "./active-link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />
  ));

  return (
    <div className="bg-gray">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formations gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi à la chaîne !
          </Typography>
          <a href="#/" target="_blank">
            <Image
              src="/assets/svg/YTB.svg"
              width={229}
              height={216}
              alt="Remote Monkey | Youtube"
            />
          </a>
        </div>
        <div className="flex gap-7 text-white">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <div className="">
            <Typography variant="caption4" theme="gray">
              {`Copyright © ${currentYear} | Propulsed by `}
              <a href="#/" target="_blank" className="underline">
                Arnaud desportes
              </a>
              {` - Remote monkey SASU`}
            </Typography>
          </div>
          <div className="">Liste des liens</div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const LinksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === "internal" && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === "external" && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        variant="caption2"
        theme="white"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography variant="caption3" theme="gray" className="space-y-4">
        {LinksList}
      </Typography>
    </div>
  );
};

export default Footer;

import Container from "@/ui/components/container/container";
import Typography from "@/ui/design-system/typography/typography";
import Image from "next/image";

interface FooterProps {}

export const Footer = ({}: FooterProps) => {
  const currentYear = new Date().getFullYear();

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
              src="/assets/svg/ytb.svg"
              width={229}
              height={216}
              alt="Remote Monkey | Youtube"
            />
          </a>
        </div>
        <div className="">Liste de lien</div>
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

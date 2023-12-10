import Typography from "@/ui/design-system/typography/typography";
import Container from "@/ui/components/container/container";
import Logo from "@/ui/design-system/logo/logo";
import Button from "@/ui/design-system/button/button";

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="flex items-center justify-between py-1.5 gap-7">
        <div className="flex items-center gap-2.5">
          <Logo size="small" />
          <div className="flex flex-col">
            <div className="text-gray font-extrabold text-[24px]">
              Coders Monkeys
            </div>
            <Typography variant="caption4" component="span" theme="gray">
              Trouve de l’inspiration & reçois des feedbacks !
            </Typography>
          </div>
        </div>
        <div className="flex items-center gap-7">
          <Typography variant="caption3" component="div" className="flex flex-center gap-7">
            <span>Projets</span>
            <span>Formations</span>
            <span>Contsact</span>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small" variant="secondary">Connexion</Button>
            <Button size="small">Rejoindre</Button>
          </div>
        </div>

      </Container>
    </div>
  );
};

export default Navigation;

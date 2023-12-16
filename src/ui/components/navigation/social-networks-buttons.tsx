import { footerSocialNetworksLinks } from "@/ui/components/navigation/app-links";
import Button from "@/ui/design-system/button/button";
import { RiFacebookBoxFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface SocialNetworksButtonsProps {
  className?: string;
}

const SocialNetworksButtons = ({ className }: SocialNetworksButtonsProps) => {
  const iconList = footerSocialNetworksLinks.map((socialNetwork) => (
    <Button
      key={uuidv4()}
      variant="icon"
      iconTheme="gray"
      icon={{ icon: RiFacebookBoxFill }}
    ></Button>
  ));

  return <div className="flex items-center gap-2.5">{iconList}</div>;
};

export { SocialNetworksButtons };

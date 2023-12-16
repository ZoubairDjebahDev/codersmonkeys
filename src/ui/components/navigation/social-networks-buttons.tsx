import { footerSocialNetworksLinks } from "@/ui/components/navigation/app-links";
import Button from "@/ui/design-system/button/button";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface Props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}

const SocialNetworksButtons = ({ className, theme = "accent" }: Props) => {
  const action = () => {
    console.log("hello");
  };

  const iconList = footerSocialNetworksLinks.map((SocialNetwork) => (
    <Button
      key={uuidv4()}
      variant="icon"
      iconTheme={theme}
      icon={{
        icon: SocialNetwork.icon ? SocialNetwork.icon : RiFacebookBoxFill,
      }}
      baseUrl={SocialNetwork.baseUrl}
      linkType={SocialNetwork.type}
      action={action}
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {iconList}
    </div>
  );
};

export { SocialNetworksButtons };

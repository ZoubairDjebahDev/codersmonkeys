import clsx from "clsx";
import Image from "next/image";

interface AvatarProps {
    size?: "small" | "medium" | "large";
    src: string;
    alt: string;
  }
  
  const Avatar = ({ size = "medium", src, alt }: AvatarProps) => {
    let sizeAvatar: string;
  
    switch (size) { 
      case "small":
        sizeAvatar = "w-[24px] h-[24px]";
        break;
      case "medium": // Default
      sizeAvatar = "w-[34px] h-[34px]";
        break;
      case "large":
        sizeAvatar = "w-[50px] h-[50px]";
        break;
    }
  
    return (
      <div className={clsx(sizeAvatar, "relative bg-gray-400 rounded-full")}>
        {<Image fill src={src} alt={alt} className="object-cover object-center rounded-full"/>}
      </div>
    );
  };
  
  export default Avatar;
  
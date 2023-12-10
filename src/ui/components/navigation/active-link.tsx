import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

const ActiveLink = ({ href, children }: ActiveLinkProps) => {
  const pathname = usePathname();

  const isActive: boolean = useMemo(() => {
    return pathname === href;
  }, [pathname, href]);
  return (
    <Link href={href} className={clsx(isActive && "text-primary font-medium")}>
      {children}
    </Link>
  );
};

export default ActiveLink;

import { useState } from "preact/compat";
import { cn } from "~lib/utils";
import MenuIcon from "./icons/MenuIcon";
import XIcon from "./icons/XIcon";
import TwitterIcon from "./icons/TwitterIcon";
import GitHubIcon from "./icons/GitHubIcon";
import InstagramIcon from "./icons/InstagramIcon";

export default function Header({ siteUrl }: { siteUrl: URL }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const items: Array<
    | {
        type: "link";
        text: string;
        href: string;
        external?: boolean;
        mobileOnly?: boolean;
        onClick?: () => void;
      }
    | {
        type: "separator";
      }
  > = [
    {
      type: "link",
      text: "Close Menu",
      href: "#",
      mobileOnly: true,
      onClick: () => setMobileMenuOpen(false),
    },
    {
      type: "link",
      text: "Home",
      href: siteUrl.toString(),
      mobileOnly: true,
    },
    {
      type: "link",
      text: "Portfolio",
      href: "https://krishg.com",
      external: true,
    },
    { type: "separator" },
  ];

  const socials: {
    icon: typeof TwitterIcon;
    href: string;
    text: string;
  }[] = [
    {
      icon: TwitterIcon,
      href: "https://x.com/kkrishguptaa",
      text: "Twitter",
    },
    {
      icon: GitHubIcon,
      href: "https://github.com/kkrishguptaa",
      text: "GitHub",
    },
    {
      icon: InstagramIcon,
      href: "https://instagram.com/kkrishguptaa",
      text: "Instagram",
    },
  ];
  return (
    <>
      <header
        className={cn(
          "flex items-end justify-between",
          "py-2 sm:py-4",
          "font-display",
          "border-b border-black/30 dark:border-white/30",
          "h-14 md:h-max"
        )}
      >
        <a
          href={siteUrl.toString()}
          className="hover:underline underline-offset-8"
        >
          <h2 className="text-2xl">Krish Gupta</h2>
        </a>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-2">
            {items
              .filter((a) => a.type === "separator" || !a.mobileOnly)
              .map((item, index) => {
                if (item.type === "link") {
                  return (
                    <li key={`${item.type}-${index}`}>
                      <a
                        href={item.href}
                        onClick={item.onClick}
                        target={item.external ? "_blank" : undefined}
                        className="hover:underline underline-offset-8"
                      >
                        {item.text}
                      </a>
                    </li>
                  );
                } else if (item.type === "separator") {
                  return <span key={`${item.type}-${index}`}>—</span>;
                }
              })}
            {socials.map((social, index) => (
              <li key={`social-${index}`} className="mx-1">
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  <social.icon height={16} width={16} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className={cn(
            "md:hidden",
            "hover:rotate-180 transition-transform duration-600",
            "cursor-pointer",
            "mb-0.5"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </header>

      <aside
        className={cn(
          "md:hidden",
          "fixed top-14 left-0 right-0",
          "h-[calc(100dvh-(var(--spacing)*14))] w-screen",
          "container mx-auto px-4",
          "transform-gpu transition-transform duration-300",
          "z-50",
          "overflow-hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-[100vw]"
        )}
      >
        <nav
          className={cn(
            "bg-white dark:bg-black",
            "h-full w-full",
            "flex flex-col justify-center items-start text-2xl",
            "gap-8"
          )}
        >
          {items
            .filter((a) => a.type === "link")
            .map((item, index) => (
              <a
                key={`${item.type}-${index}`}
                href={item.href}
                onClick={item.onClick}
                target={item.external ? "_blank" : undefined}
                className="underline underline-offset-8 mb-2"
              >
                {item.text}
              </a>
            ))}

          <ul className="flex items-center gap-4 mt-4">
            {socials.map((social, index) => (
              <li key={`social-${index}`}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon height={24} width={24} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

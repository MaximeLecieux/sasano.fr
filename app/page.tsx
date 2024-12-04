import { ActiveLink } from "@/components/ui/components/navigation/active-link";
import { navAppLinks } from "@/components/ui/components/navigation/app-links";
import { Button } from "@/components/ui/design-system/button/Button";
import { Typography } from "@/components/ui/design-system/typographie/Typographie";
import { AppLinks } from "@/lib/types/app-links";
import { LinkTypes } from "@/lib/types/link-types";

export default function Home() {

  const homeLinks = navAppLinks.map((link: AppLinks) => {
    if (link.type === LinkTypes.INTERNAL) {
      return (
        <Button baseUrl={link.baseUrl} linkType={link.type}>
            {link.label}
        </Button>
      );
    } else if (link.type === LinkTypes.EXTERNAL) {
      return (
        <a
          key={link.label}
          href={link.baseUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      );
    }
    return null;
  });

  return (
      <div>
          <Typography
            variant="h1"
            component="h1"
          >
            Sacré Sac de Noeud
          </Typography>
          <Typography
            variant="h2"
            component="h2"
          >
            Un sac à porter demain
          </Typography>
          <div>
            {homeLinks}
          </div>
      </div>
  );
}

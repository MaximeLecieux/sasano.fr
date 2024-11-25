import { Typography } from "@/components/ui/design-system/typographie/Typographie";

export default function Home() {
  return (
    <>
    <div className="grid  gap-10 text-center">
        <Typography variant="display" component="p">
          Display
        </Typography>
        <Typography variant="h1" component="h1">
          Titre principale
        </Typography>
        <Typography variant="h2" component="h2">
          Titre secondaire
        </Typography>
        <Typography variant="h3" component="h3">
          Titre h3
        </Typography>
        <Typography variant="h4" component="h4">
          Titre h4
        </Typography>
        <Typography variant="h5" component="h5">
          Titre h5
        </Typography>
        <Typography variant="lead" component="p">
          Ceci est un Lead
        </Typography>
        <Typography variant="body-lg" component="span">
          Ceci est un body-lg
        </Typography>
        <Typography variant="body-base" component="p">
          Ceci est un body-base
        </Typography>
        <Typography variant="body-sm" component="p">
        Ceci est un body-sm
        </Typography>
        <Typography variant="caption1" component="p">
        Ceci est un caption 1
        </Typography>
        <Typography variant="caption2" component="p">
        Ceci est un caption 2
        </Typography>
        <Typography variant="caption3" component="p">
        Ceci est un caption 3
        </Typography>
        <Typography variant="caption4" component="p">
        Ceci est un caption 4
        </Typography>
        <Typography variant="lead" component="p" color="danger">
          Ceci est un message d'avertissement
        </Typography>
    </div>
    </>
  );
}

import { Typography } from "@/components/ui/design-system/typographie/Typographie";

export default function Home() {
  return (
    <>
      <Typography variant="display" component="p">
        Hello world
      </Typography>
      <Typography variant="h1" component="h1">
        Hello world
      </Typography>
      <Typography variant="h2" component="h2">
        Hello world
      </Typography>
      <Typography variant="h3" component="h3">
        Hello world
      </Typography>
      <Typography variant="h4" component="h4">
        Hello world
      </Typography>
      <Typography variant="h5" component="h5">
        Hello world
      </Typography>
      <Typography variant="lead" component="p">
        Hello world
      </Typography>
      <Typography variant="body-lg" component="span">
        Hello world
      </Typography>
      <Typography variant="body-base" component="p">
        Hello world
      </Typography>
      <Typography variant="body-sm" component="p">
        Hello world
      </Typography>
      <Typography variant="caption1" component="p">
        Hello world
      </Typography>
      <Typography variant="caption2" component="p">
        Hello world
      </Typography>
      <Typography variant="caption3" component="p">
        Hello world
      </Typography>
      <Typography variant="caption4" component="p">
        Hello world
      </Typography>
      <Typography variant="display" component="p" color="white" className="text-yellow">
        Hello world
      </Typography>
      <p className="text-sky-400/100">The quick brown fox...</p>
    </>
  );
}

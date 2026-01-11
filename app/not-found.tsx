import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-20">
      <Container>
        <div className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm shadow-black/5">
          <p className="text-sm font-semibold text-zinc-600">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
            Page not found
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600">
            The page you’re looking for doesn’t exist. Use the links below to get
            back on track.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <Button href="/">Go home</Button>
            <Button href="/contact/" variant="secondary">
              Get a quote
            </Button>
            <Link className="self-center text-sm text-zinc-600 hover:text-zinc-950" href="/services/">
              Browse services
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}



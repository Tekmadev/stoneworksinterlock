import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";

type SectionProps = React.PropsWithChildren<{
  className?: string;
  containerClassName?: string;
}>;

export function Section({ className, containerClassName, children }: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-20", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}



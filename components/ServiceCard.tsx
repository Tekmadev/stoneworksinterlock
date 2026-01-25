import Image from "next/image";
import type { Service } from "@/data/services";
import { cn } from "@/lib/cn";
import { Card } from "@/components/ui/Card";

export function ServiceCard({
  service,
  className,
}: {
  service: Service;
  className?: string;
}) {
  const image = service.gallery[0];
  return (
    <Card className={cn("group overflow-hidden p-0", className)}>
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image?.src ?? "/placeholders/interlock-1.svg"}
          alt={image?.alt ?? `${service.name} placeholder`}
          fill
          className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold tracking-tight text-zinc-950">
          {service.name}
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-600">{service.short}</p>
      </div>
    </Card>
  );
}



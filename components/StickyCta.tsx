import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrackedCallButton } from "@/components/TrackedCallButton";

export function StickyCta() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 pb-3 sm:hidden">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="pointer-events-auto rounded-2xl border border-zinc-200 bg-white/90 p-2 shadow-lg shadow-black/10 backdrop-blur">
          <div className="grid grid-cols-2 gap-2">
            <TrackedCallButton placement="sticky" size="md" className="gap-2">
              <Phone className="h-4 w-4" />
              Call
            </TrackedCallButton>
            <Button href="/contact/" variant="secondary" size="md">
              Form
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}



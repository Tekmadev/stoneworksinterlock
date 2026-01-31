"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/cn";
import { trackGaEvent } from "@/lib/ga";
import { hasFirebaseConfig, subscribeNewsletterEmail } from "@/lib/firebase";

function isValidEmail(input: string) {
  return /^\S+@\S+\.\S+$/.test(input.trim());
}

export function NewsletterSignup({ className }: { className?: string }) {
  const firebaseReady = useMemo(() => hasFirebaseConfig(), []);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "already" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const disabled = !firebaseReady || status === "submitting";

  return (
    <div className={cn(className)}>
      <p className="text-sm font-semibold">Newsletter</p>
      <p className="mt-2 text-sm text-zinc-600">
        Occasional tips and updates. No spam.
      </p>

      {!firebaseReady ? (
        <p className="mt-3 text-xs text-zinc-500">
          Newsletter signup is temporarily unavailable.
        </p>
      ) : null}

      <form
        className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-3"
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");

          const normalized = email.trim().toLowerCase();
          if (!normalized) {
            setStatus("error");
            setError("Please enter your email.");
            return;
          }
          if (!isValidEmail(normalized)) {
            setStatus("error");
            setError("Please enter a valid email.");
            return;
          }

          if (!firebaseReady) return;

          try {
            setStatus("submitting");
            const res = await subscribeNewsletterEmail(normalized);
            if (!res.ok) {
              setStatus("error");
              setError("Unable to subscribe right now. Please try again later.");
              trackGaEvent("newsletter_subscribe_error", { reason: res.reason });
              return;
            }

            if (res.alreadySubscribed) {
              setStatus("already");
              trackGaEvent("newsletter_already_subscribed");
            } else {
              setStatus("success");
              trackGaEvent("newsletter_subscribe_success");
            }
          } catch {
            setStatus("error");
            setError("Unable to subscribe right now. Please try again later.");
            trackGaEvent("newsletter_subscribe_error", { reason: "exception" });
          }
        }}
      >
        <input
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
            if (error) setError("");
          }}
          className={cn(
            "h-11 w-full min-w-0 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-950 placeholder:text-zinc-400 sm:flex-1",
            "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background",
          )}
          disabled={disabled}
        />
        <button
          type="submit"
          disabled={disabled}
          className={cn(
            "newsletter-subscribe-btn",
            "w-full sm:w-auto",
          )}
        >
          Subscribe
        </button>
      </form>

      {status === "success" ? (
        <p className="mt-2 text-xs text-emerald-700">Subscribed. Thank you.</p>
      ) : null}
      {status === "already" ? (
        <p className="mt-2 text-xs text-zinc-600">You’re already subscribed.</p>
      ) : null}
      {status === "error" ? (
        <p className="mt-2 text-xs text-red-600">{error}</p>
      ) : null}
    </div>
  );
}


// Sökikon som öppnar ett sökfält. UI-skelett – TODO nedan, kolleger kopplar på riktig sökfunktion.
"use client";

import { useState } from "react";

export function SearchBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-label={open ? "Stäng sök" : "Sök"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-background hover:text-foreground"
      >
        <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5">
          <circle
            cx="9"
            cy="9"
            r="5.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="m17 17-3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-20 mt-3 w-64 rounded-xl border border-border bg-white p-2 shadow-lg sm:w-72">
          {/* TODO(kollegor): koppla sökfältet till faktisk produktsökning/filtrering. */}
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="search"
              placeholder="Sök produkter..."
              autoFocus
              className="w-full rounded-lg border border-border px-3 py-2 text-sm text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
            />
          </form>
        </div>
      )}
    </div>
  );
}

// Listar nedladdningsbara filer (produktblad, ritningar) för en produkt, som pillformade länkar.
import type { ProductDownload } from "@/types/product";

export function ProductDownloads({
  downloads,
}: {
  downloads?: ProductDownload[];
}) {
  if (!downloads || downloads.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight">
        Dokument &amp; ritningar
      </h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {downloads.map((file) => (
          <a
            key={file.href}
            href={file.href}
            download
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-white py-1.5 pl-2.5 pr-3 text-sm text-foreground/80 transition-colors hover:border-accent hover:text-foreground"
          >
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-3.5 w-3.5 shrink-0 text-foreground/40 transition-colors group-hover:text-accent"
            >
              <path
                d="M5 2.5h6.5L15 6v11a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 2.5V6H15"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinejoin="round"
              />
            </svg>
            {file.label}
            <span className="text-xs uppercase tracking-wide text-foreground/40">
              {file.format}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

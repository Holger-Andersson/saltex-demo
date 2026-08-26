import type { Product } from "@/types/product";

export function ProductDescription({
  details,
}: {
  details: Product["details"];
}) {
  if (!details || details.length === 0) {
    return null;
  }

  return (
    <div className="max-w-prose">
      <h2 className="text-lg font-semibold tracking-tight">Om produkten</h2>
      <div className="mt-4 flex flex-col gap-4">
        {details.map((paragraph, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "text-base leading-relaxed text-foreground"
                : "leading-relaxed text-foreground/80"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

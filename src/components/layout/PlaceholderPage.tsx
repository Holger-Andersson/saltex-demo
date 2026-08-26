// Enkel platshållarlayout för sidor vars riktiga innehåll ännu inte är skrivet.
import { Container } from "@/components/layout/Container";

export function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Container>
      <div className="max-w-2xl py-16">
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 leading-relaxed text-foreground/70">
          {description}
        </p>
      </div>
    </Container>
  );
}

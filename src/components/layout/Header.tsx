import Link from "next/link";

import { Container } from "@/components/layout/Container";

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <Container>
        <nav>
          <Link
            href="/"
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          ></Link>
        </nav>
      </Container>
    </header>
  );
}

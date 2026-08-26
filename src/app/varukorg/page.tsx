// Kundvagnssida – visar just nu bara ett tomt-läge (se @/components/cart/EmptyCartState).
// TODO(kollegor): koppla på riktig kundvagnsstate (lägg till/ta bort rader, summa, kassaflöde).
import { Container } from "@/components/layout/Container";
import { EmptyCartState } from "@/components/cart/EmptyCartState";

export default function CartPage() {
  return (
    <Container>
      <div className="py-16">
        <h1 className="text-3xl font-semibold tracking-tight">Din varukorg</h1>
        <div className="mt-8">
          <EmptyCartState />
        </div>
      </div>
    </Container>
  );
}

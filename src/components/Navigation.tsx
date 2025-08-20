import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
    <nav>
      <Button asChild variant="secondary">
        <Link href="/table/gpt">/gpt</Link>
      </Button>
      <Button asChild variant="secondary">
        <Link href="/table/payments">/payments</Link>
      </Button>
      <Button asChild variant="secondary">
        <Link href="/table/nikitaDev">/nikitaDev</Link>
      </Button>
    </nav>
  );
}

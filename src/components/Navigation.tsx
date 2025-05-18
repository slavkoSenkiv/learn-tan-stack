import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  return (
    <nav>
      <Button asChild variant="secondary">
        <Link href="/table/gpt">/table/gpt</Link>
      </Button>
    </nav>
  );
}

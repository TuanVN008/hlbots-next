import Container from '@/components/ui/container';
import { type Dict } from '@/lib/i18n';

export default function Footer({ dict }: { dict: Dict }) {
  const t = dict.footer;
  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="py-10 flex items-center justify-center text-sm text-white/60">
          <p>© 2022 HLBots. {t.rights}</p>
        </div>
      </Container>
    </footer>
  );
}

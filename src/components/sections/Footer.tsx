import { profile } from "../../data/content";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <a href="#top" className="underline-reveal hover:text-ink transition-colors">
          Back to top
        </a>
      </Container>
    </footer>
  );
}

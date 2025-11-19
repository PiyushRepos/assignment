import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "./Container";

export default function Header() {
  return (
    <header className="py-4 border-b border-zinc-800/90">
      <Container>
        <nav className="flex items-baseline justify-between">
          <div className="flex h-full  items-center gap-4">
            <div>
              <h4 className="text-sm font-semibold">Posted Gigs</h4>
            </div>
            <div className="h-5 w-0.5 bg-zinc-500 transform rotate-20" />
            <div>
              <Badge
                variant="default"
                className="rounded-sm text-sm font-bold bg-white"
              >
                Applicants
              </Badge>
            </div>
          </div>
          <div>
            <Button size="default" variant="outline">
              Contact us
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

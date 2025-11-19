import { getProfile } from "@/actions/profile";
import Container from "@/components/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default async function Header({ params }: { params: { id: string } }) {
  const { id } = params;

  const { success, profile } = await getProfile(id);

  if (!success || !profile || !profile.isUnlocked) {
    return null;
  }

  return (
    <header className="py-4 border-b border-zinc-800/90">
      <Container>
        <nav className="flex items-baseline justify-between">
          <div className="hidden md:flex h-full items-center gap-4">
            <div>
              <Link href="/" className="text-sm font-semibold">
                Posted Gigs
              </Link>
            </div>
            <div className="h-5 w-0.5 bg-zinc-500 transform rotate-20" />
            <div>
              <Link href="/" className="text-sm font-semibold">
                Applicants
              </Link>
            </div>
            <div className="h-5 w-0.5 bg-zinc-500 transform rotate-20" />
            <div>
              <Badge
                variant="default"
                className="rounded-sm text-sm font-bold bg-white"
              >
                View Profile
              </Badge>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-4">
              <h4 className="text-sm text-zinc-200 font-light">
                Candidate Status
              </h4>
              <Button size="default" variant="outline">
                <Badge
                  variant="warning"
                  className="rounded-sm bg-amber-700/90 px-1.5 py-1 font-semibold flex items-center gap-1.5"
                >
                  <div className="bg-warning w-1.5 h-1.5 rounded-full" />
                  <p className="text-amber-200 font-medium">
                    {profile.candidateStatus || "Under Review"}
                  </p>
                </Badge>
                <ArrowDown className="h-4 w-4 opacity-75" />
              </Button>
              {/* <Button size="default" variant="outline">
                Contact us
              </Button> */}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

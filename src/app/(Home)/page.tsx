import { getProfiles } from "@/actions/profile";
import ApplicantCard from "@/components/ApplicantCard";
import Container from "@/components/Container";
import Info from "@/components/Info";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowDownUp } from "lucide-react";

const filters = [
  {
    id: "experience",
    name: "Experience Level",
  },
  {
    id: "availability",
    name: "Availability",
  },
  {
    id: "location",
    name: "Preferred Location",
  },
  {
    id: "skills",
    name: "Skills",
  },
  {
    id: "expected-ctc",
    name: "Expected CTC",
  },
];

export const dynamic = "force-dynamic";

async function Home() {
  const { profiles } = await getProfiles();

  return (
    <main>
      <Container className="pb-8">
        <div className="mt-10">
          <div className="border-b pb-6 border-zinc-800">
            <div className="flex items-center gap-4">
              <h2 className="font-bold text-lg sm:text-xl">Product Designer</h2>
              <Badge
                variant="success"
                className="rounded-sm px-1.5 py-1 font-semibold flex items-center gap-1.5"
              >
                <div className="bg-success w-1.5 h-1.5 rounded-full" />
                <p>59 Applicants</p>
              </Badge>
            </div>
            {/* @ts-ignore */}
            <Info profile={{}} />
          </div>
        </div>
        <div>
          <div className="mt-8 flex items-center justify-between">
            <div className="hidden md:flex items-center gap-3 overflow-x-auto">
              {filters.map((filter) => (
                <div key={filter.id}>
                  <Button className="text-xs" size="sm" variant="outline">
                    {filter.name}
                  </Button>
                </div>
              ))}
            </div>
            <div>
              <Button className="text-xs md:hidden" size="sm" variant="outline">
                Filters
              </Button>
            </div>
            <div>
              <Button className="text-xs" size="sm" variant="outline">
                <ArrowDownUp size={16} />
                Sort
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid md:grid-cols-2 lg:auto-rows-fr gap-6 md:gap-8">
            {profiles?.map((profile) => (
              <div key={profile._id}>
                <ApplicantCard data={profile} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}

export default Home;

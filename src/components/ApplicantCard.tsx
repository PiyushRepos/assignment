import { Applicant } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import { CircleProgress } from "./CircleProgress";
import Info from "./Info";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import UnlockButton from "./UnlockButton";
import Link from "next/link";

interface Props {
  data: Applicant;
}

export default function ApplicantCard({ data }: Props) {
  return (
    <Card className="rounded-lg bg-secondary/40 p-4 w-full">
      <div>
        <div className="flex items-start gap-4 md:gap-6">
          <div className="border rounded-full w-fit border-zinc-600 p-1">
            <Image
              src={data.avatarUrl}
              width={50}
              height={50}
              alt={data.name}
              className="rounded-full"
            />
          </div>
          <div className="mt-2 flex items-start gap-3 justify-between w-full">
            <div>
              <h3 className="font-bold flex flex-col gap-0.5">
                {data.name}
                {/* <span className="w-1.5 h-1.5 md:inline-block hidden bg-zinc-400 rounded-full" /> */}
                <span className="text-sm text-info font-semibold">
                  {data.role}
                </span>
              </h3>
            </div>
            <div>
              <CircleProgress percentage={data.score} />
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-xl">
          <Info profile={data} />
        </div>
        <div className="my-5">
          <h3 className="text-sm text-zinc-400">Skills</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-zinc-400">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="my-5">
          <h3 className="text-sm text-zinc-400">Ideal next opportunity</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge
              variant="info"
              className="text-zinc-400 bg-info/20 rounded-sm"
            >
              {data.idealNextOpportunity?.role}
            </Badge>
            <Badge
              variant="success"
              className="rounded-sm px-1.5 py-1 font-semibold flex items-center gap-1.5"
            >
              {data.idealNextOpportunity?.salary}
            </Badge>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-y-4 md:gap-4 mt-4 ">
          <Button
            variant="outline"
            size="sm"
            className="w-full font-semibold text-sm"
          >
            <X className="text-red-500" />
            Reject
          </Button>
          {!data.isUnlocked ? (
            <UnlockButton cost={data.cost} id={data._id} />
          ) : (
            <Button asChild size="sm" className="w-full font-semibold text-sm">
              <Link href={`/profiles/${data._id}`}>View Profile</Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}

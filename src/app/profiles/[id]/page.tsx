import { getProfile } from "@/actions/profile";
import { CircleProgress } from "@/components/CircleProgress";
import Container from "@/components/Container";
import Info from "@/components/Info";
import { Badge } from "@/components/ui/badge";
import { ArrowDownRight, Building2, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Header from "../_components/Header";

interface pageProps {
  params: {
    id: string;
  };
}

export const dynamic = "force-dynamic";

async function page({ params }: pageProps) {
  const { id } = await params;

  const { success, profile } = await getProfile(id);

  if (!success || !profile || !profile.isUnlocked) {
    return (
      <Container>
        <div className="py-20 flex flex-col items-center justify-center gap-6">
          <Image
            src="/unlock.png"
            alt="Locked Profile"
            width={150}
            height={150}
          />
          <p className="text-zinc-400 text-lg font-semibold">
            This profile is locked.
          </p>
          <div>
            {/* Go back */}
            <Link href="/" className="text-blue-700 underline font-medium">
              Go back to Applicants
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <>
      <Header params={{ id }} />
      <Container>
        <div className="py-10">
          <div className="flex items-center gap-6">
            <div>
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                width={120}
                height={120}
                className="rounded-full border-4 border-white/85 shadow-md"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-2xl font-semibold flex items-center space-x-3">
                <h2>{profile.name}</h2>
                <div className="h-2 w-2 bg-zinc-500 rounded-full my-2" />
                <p className="text-blue-300">{profile.role}</p>
              </div>
              <div>
                <Info profile={profile} />
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-x-16">
            <div className="flex-1">
              <div className="mt-8 space-y-4 border-b border-zinc-700/70 pb-7">
                <h2 className="text-zinc-400 font-medium">About me</h2>
                <p className="text-zinc-300 font-light">{profile.about}</p>
              </div>
              <div className="mt-8 space-y-4 border-b border-zinc-700/70 pb-7">
                <h2 className="text-zinc-400 font-medium">Skills</h2>
                <div className="flex flex-wrap gap-3">
                  {profile.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-light px-2.5 py-1 rounded-md"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="mt-8 space-y-4 border-b border-zinc-700/70 pb-7">
                <h2 className="text-zinc-400 font-medium">College</h2>
                <div>
                  {profile.education?.map((edu, index) => (
                    <div key={edu.degree} className="mb-3 text-zinc-300 ">
                      <p className="font-mediium">{edu.institution}</p>
                      <p className="font-light mt-1.5 flex items-center gap-1 text-sm">
                        {edu.degree}
                        <Minus className="transform rotate-90 text-zinc-500" />
                        {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <h2 className="text-zinc-400 font-medium">Experience</h2>
                <div className="space-y-2">
                  {profile.experience_details?.map((exp, index) => (
                    <div
                      key={exp.position}
                      className="mb-3 text-zinc-300 flex items-center gap-4"
                    >
                      <div className="text-zinc-500 bg-secondary-foreground/10 p-2 rounded-md w-fit border border-zinc-700 flex items-center gap-3">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <p className="font-mediium mt-2">{exp.position}</p>
                        <p className="font-light mt-1.5 flex items-center gap-1 text-sm">
                          {exp.company}
                          <Minus className="transform rotate-90 text-zinc-500" />
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6 max-w-5xl shrink-0 mt-4">
              <div className="space-y-3">
                <p className="text-zinc-400">Score</p>
                <CircleProgress radius={30} percentage={profile.score} />
              </div>
              <div className="space-y-1.5">
                <p className="text-zinc-400">Location</p>
                <p className="text-zinc-200 font-semibold">
                  {profile.location}
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="text-zinc-400">Website</p>
                <Link
                  href={profile.website || "#"}
                  className="text-zinc-200 font-semibold flex items-center gap-1 w-fit"
                >
                  {profile.website}
                  <ArrowDownRight className="transform -rotate-85 size-5 mt-1 text-zinc-400" />
                </Link>
              </div>
              <div className="space-y-1.5">
                <p className="text-zinc-400">Resume</p>
                <Link
                  href={profile.resume || "#"}
                  className="text-zinc-200 font-semibold flex items-center gap-1 w-fit"
                >
                  {profile.resume}
                  <ArrowDownRight className="transform -rotate-85 size-7 mt-1 text-zinc-400" />
                </Link>
              </div>
              <div className="space-y-1.5">
                <p className="text-zinc-400">Ideal next opportunity</p>
                <div className="flex flex-wrap w-full gap-2 mt-2">
                  <Badge
                    variant="info"
                    className="text-zinc-400 bg-info/20 rounded-sm"
                  >
                    {profile.idealNextOpportunity?.role}
                  </Badge>
                  <Badge
                    variant="success"
                    className="rounded-sm px-1.5 py-1 font-semibold flex items-center gap-1.5"
                  >
                    {profile.idealNextOpportunity?.salary}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default page;

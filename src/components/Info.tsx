import { Applicant } from "@/types";

interface InfoProps {
  profile: Applicant;
}

const Info = ({ profile }: InfoProps) => {
  return (
    <div className="text-xs text-zinc-300/95 font-semibold mt-3 flex gap-y-2 gap-x-3 flex-wrap">
      <p>{profile?.experience || "0 - 1"} of Experience</p>
      <div className="w-1 h-4 border-l border-zinc-700" />
      <p>{profile?.experience_details?.[0]?.company || "Zepto"}</p>
      <div className="w-1 h-4 border-l border-zinc-700" />
      <p>{profile?.location || "New Delhi, India"}</p>
      <div className="w-1 h-4 border-l border-zinc-700" />
      {profile?.college && (
        <>
          <p>{profile.college}</p>
          <div className="w-1 h-4 border-l border-zinc-700" />
        </>
      )}
      <div className="flex items-center gap-1.5">
        <div className="bg-success w-1.5 h-1.5 rounded-full" />
        <p>{profile?.availability || "Available Immediately"}</p>
      </div>
    </div>
  );
};
export default Info;

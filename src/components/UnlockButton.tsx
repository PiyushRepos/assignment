"use client";
import { unlockProfile } from "@/actions/profile";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LockKeyhole } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  cost: number;
}

export default function UnlockButton({ id, cost }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleProfileUnlock = async () => {
    console.log("Unlocking profile:", id);
    await unlockProfile(id);
    router.push(`/profiles/${id}`);
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="w-full font-semibold text-sm px-3 text-center"
          >
            <span className="md:hidden lg:inline">
              <LockKeyhole size={20} />
            </span>
            <span className="lg:border-r-2 lg:pr-2 border-zinc-400">
              Unlock Profile
            </span>
            <span className="flex items-center gap-0.5">
              <Image
                src="/gold-coin.png"
                alt="coin icon"
                width={20}
                height={20}
              />
              {cost}
            </span>
          </Button>
        </DialogTrigger>
        <DialogContent className="w-sm">
          <DialogHeader>
            <DialogTitle className="font-bold text-xl md:text-2xl text-center">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="/unlock.png"
                  alt="coin icon"
                  width={50}
                  height={50}
                />
                <p>Are you sure you want to unlock this profile?</p>
              </div>
            </DialogTitle>
            <DialogDescription className="max-w-xs mx-auto text-center">
              Unlocking will cost {cost} credit. Once confirmed, you&apos;ll be
              able to chat with this candidate directly.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <div className="w-full">
              <p className="text-xs text-center mb-2 mt-4">
                Credits Available: <span className="font-bold">200</span>
              </p>
              <Button
                onClick={() => handleProfileUnlock()}
                className="w-full text-sm bg-amber-700/80 hover:bg-amber-700/90 text-white font-bold"
              >
                <span>Unlock</span>
                <span>
                  <Image
                    src="/gold-coin.png"
                    alt="coin icon"
                    width={20}
                    height={20}
                  />
                </span>
                <span>{cost} Credits</span>
              </Button>
              <div className="pt-5 mt-4 text-sm text-center text-info/75 border-t">
                <p>Most startups find it worth it - top talents go fast.</p>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

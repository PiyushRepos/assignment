"use server";
import axios from "@/lib/axios";
import { Applicant } from "@/types";
import { revalidatePath } from "next/cache";

export async function getProfiles(): Promise<{
  success: boolean;
  profiles: Applicant[];
}> {
  const res = await axios.get("/api/profiles");

  if (res.status !== 200) {
    throw new Error("Failed to fetch profiles");
  }

  const data: any = res.data;
  return data;
}

export async function getProfile(
  id: string
): Promise<{ success: boolean; profile: Applicant }> {
  const res = await axios.get(`/api/profiles/${id}`);

  if (res.status !== 200) {
    throw new Error("Failed to fetch profile");
  }

  const data: any = res.data;
  return data;
}

export async function unlockProfile(
  id: string
): Promise<{ success: boolean; message: string }> {
  const res = await axios.get(`/api/unlock/?id=${id}`);

  if (res.status !== 200) {
    throw new Error("Failed to unlock profile");
  }

  const data = res.data;
  revalidatePath(`/profiles/${id}`);
  return data;
}

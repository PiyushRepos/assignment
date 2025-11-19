import { NextApiRequest } from "next";
import mongoose from "mongoose";
import dbConnect from "@/lib/db";
import { ApplicantModel } from "@/models/applicant.model";

export async function GET(
  request: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return Response.json({ error: "Invalid profile ID" }, { status: 400 });
  }

  try {
    await dbConnect();
    const profile = await ApplicantModel.findById(id);

    if (!profile) {
      return Response.json({ error: "Profile not found" }, { status: 404 });
    }

    if (profile.isUnlocked) {
      return Response.json(
        { success: true, message: "Profile already unlocked" },
        { status: 200 }
      );
    }

    profile.isUnlocked = true;
    await profile.save();

    return Response.json(
      { success: true, message: "Profile unlocked successfully" },
      { status: 200 }
    );
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

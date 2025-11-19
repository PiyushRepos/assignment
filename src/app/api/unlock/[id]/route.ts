import dbConnect from "@/lib/db";
import { ApplicantModel } from "@/models/applicant.model";
import mongoose from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  request: NextApiRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;

  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid profile ID" }, { status: 400 });
  }

  try {
    await dbConnect();
    const profile = await ApplicantModel.findById(id);

    if (!profile) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    if (profile.isUnlocked) {
      return NextResponse.json(
        { success: true, message: "Profile already unlocked" },
        { status: 200 }
      );
    }

    profile.isUnlocked = true;
    await profile.save();

    return NextResponse.json(
      { success: true, message: "Profile unlocked successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

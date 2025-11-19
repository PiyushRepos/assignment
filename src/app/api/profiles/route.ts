import dbConnect from "@/lib/db";
import { ApplicantModel } from "@/models/applicant.model";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const profiles = await ApplicantModel.find({});
    return NextResponse.json({ success: true, profiles }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch profiles" },
      { status: 500 }
    );
  }
}

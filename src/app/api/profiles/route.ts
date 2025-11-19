import dbConnect from "@/lib/db";
import { ApplicantModel } from "@/models/applicant.model";

export async function GET() {
  try {
    await dbConnect();
    const profiles = await ApplicantModel.find({});
    return Response.json({ success: true, profiles }, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch profiles" },
      { status: 500 }
    );
  }
}

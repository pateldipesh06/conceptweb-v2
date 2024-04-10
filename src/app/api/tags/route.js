import connectMongoDB from "../../../../libs/mongodb";
import Tags from "../../../../models/tags";
import { NextResponse } from "next/server"


export async function POST(request) {
    const { name, level } = await request.json();
    await connectMongoDB();
    await Tags.create({ name, level });
    return NextResponse.json({ message: "Tags Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Tags = await Tags.find();
    return NextResponse.json({ Tags })
}
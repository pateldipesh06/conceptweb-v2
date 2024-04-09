import connectMongoDB from "../../../../libs/mongodb";
import Card from "../../../../models/card";
import { NextResponse } from "next/server"


export async function POST(request) {
    const { cardtitle, carddescription } = await request.json();
    await connectMongoDB();
    await Card.create({ cardtitle, carddescription });
    return NextResponse.json({ message: "Card Created" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const cards = await Card.find();
    return NextResponse.json({ cards })
}


import connectionToDatabase from "@/lib/mongodb";

export async function GET(req) {
  try {
    await connectionToDatabase();

    const posts = await req.json();

    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    console.error("GET /api/posts error:", err);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}

// In this file, we can define any type of request as follows:
// export async function GET(Request) {} /api/posts/
// export async function POST(Request) {} /api/posts/
// export async function PUT(Request) {} /api/posts/<id>/
// export async function DELETE(Request) {} /api/posts/<id>/
//  A simple GET Example

import posts from "@/utils/posts"

export async function GET(request) {
    const data = posts

    return new Response(JSON.stringify(data))
}

// /api/route POST
export async function POST(request) {
    const data = await request.json()
    console.log(data)
    return new Response(
        JSON.stringify(
            {message: "Post successfully added"}
        )
    )
}
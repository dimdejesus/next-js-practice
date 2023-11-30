// In this file, we can define any type of request as follows:
// export async function GET(Request) {} /api/posts/
// export async function POST(Request) {} /api/posts/
// export async function PUT(Request) {} /api/posts/<id>/
// export async function DELETE(Request) {} /api/posts/<id>/
//  A simple GET Example


import { PrismaClient } from "@prisma/client"

export async function GET(request) {
    const prisma = new PrismaClient()
    const data = await prisma.post.findMany()

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
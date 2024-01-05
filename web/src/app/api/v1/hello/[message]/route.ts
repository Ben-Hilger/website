export async function GET(
    _: Request,
    { params }: { params: { message: string }}
) {
    return Response.json(`Hello ${params.message}! Hope you had a great holiday and start to the new year!`);
}


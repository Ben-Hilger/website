export async function POST(request: Request) {

    let json: any = null;
    try {
        json = await request.json();
    } catch {
        return new Response(JSON.stringify("You must send a list of numbers as json in the request body"), {
            status: 400
        });
    }
    
    const numbers = json.split(",");
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        const convertedNumber = Number(numbers[i]);
        if (isNaN(convertedNumber)) {
            return new Response(JSON.stringify(`Invalid number: ${numbers[i]}`), {
                status: 400
            });
        }
        sum += convertedNumber;
    }

    return Response.json(sum);
}

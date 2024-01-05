import { NextApiRequest, NextApiResponse } from "next";
import * as axios from "axios"; 


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { repository } = req.query;

    const githubUrl = `https://api.github.com/repos/Ben-Hilger/${repository}/commits`;

    try {
        const response = await fetch(githubUrl, { 
            headers: {
                'Authorization': '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' 
            }
        });

        const data = await response.json();
        res.end(data);
        return;
    } catch {
        console.log("Therew was an issue")
    }

    res.end([]);
}

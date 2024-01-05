
class GithubCommit {
    constructor(public committerName: string,
                public avatarUrl: string,
                public commitMessage: string) {}
}

export async function GET(
    _: Request,
    { params }: { params: { repository: string }}
) {
    const githubUrl = `https://api.github.com/repos/Ben-Hilger/${params.repository}/commits`;
    const commits: GithubCommit[] = [];

    try {
        const gitHubAccessToken = process.env.GITHUB_ACCESS_TOKEN ?? "";
        if (gitHubAccessToken === "") {
            return Response.error(); 
        }
        const response = await fetch(githubUrl, { 
            headers: {
                'Authorization': gitHubAccessToken
            }
        });

        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            const currentData = data[i];
            commits.push(new GithubCommit(currentData.committer.login, currentData.committer.avatar_url, currentData.commit.message));
        }
    } catch {
        console.log("Therew was an issue")
    }

    return Response.json(commits);
}

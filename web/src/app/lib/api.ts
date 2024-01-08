export default class ApiService {
   
    constructor() {}

    getGithubCommits(repository: string) {
        return fetch(this.getGithubUrl(repository));
    }

    sendHelloMessage(message: string) {
        return fetch(`/api/v1/hello/${message}`);
    }

    sendNumberMessage(message: string) {
        return fetch(`/api/v1/sum`, {
            method: 'POST',
            body: JSON.stringify(message),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    getGithubUrl(repository: string) {
        return `/api/v1/github/${repository}`;
    }
}

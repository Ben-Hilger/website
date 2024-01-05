'use client';

interface RepositoryProps {
    name: string,
    repository: string,
    link: string
}

import React from "react";
import ApiService from "../lib/api";
import Image from "next/image";

 export default function GitHubCommits(props: RepositoryProps) {

    const [commits, setCommits] = React.useState<any[]>([]);

    const apiService = new ApiService();

    React.useEffect(() => {
        getRepository(props.repository);
    }, [props.repository]);

    function getRepository(repository: string) {
        const apiService = new ApiService();
        apiService
            .getGithubCommits(repository)
            .then(response => {
                return response.json()
            }).then(data => {
                setCommits(data);
            });
    }

    if (commits.length == 0) {
        return <></>
    }

    return (
        <div className="border-01 border-rounded">
            <div className="p-1 border-bottom">
                <h3 className="p-0 m-0 mb-1">Recent GitHub Commits</h3>
                <p className="m-0 p-0 mb-1"><b>Repository</b>: <a target="_blank" href={props.link}>{ props.name }</a></p>
                <p className="m-0 p-0"><b>API Call</b>: /{apiService.getGithubUrl(props.repository)}</p>
            </div>
            <div className="flex flex-col border-rounded" style={{ height: "50vh", overflow: "scroll"}}>
                { 
                    commits.map((commit: any) => {
                        return (
                            <div key={commit.commitMessage} className="border-bottom p-1">
                                <h4 className="p-0 m-0 mb-1">{commit.commitMessage}</h4>
                                <div className="flex flex-row align-items-center">
                                    <Image className="border-rounded mr-1" src={commit.avatarUrl} width={30} height={30} alt="Github Profile Image"/>
                                    <p className="p-0 m-0">{commit.committerName}</p>
                                </div>
                            </div>

                        );
                    }
                )}

                <p className="mt-2 mb-2 w-100 flex justify-content-center text-disabled">No more commits to show</p>
            </div>
        </div>
    );
 }


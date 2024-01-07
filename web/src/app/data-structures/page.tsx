import Card from "../components/card";
import ArrayList from "./arraylist";

type DataStructure = {
    title: string,
    description: string,
    link: string
}

const dataStructures: DataStructure[] = [
   {title: "ArrayList", description: "Interact with an arraylist", link: "#arraylist"},
   {title: "Stack", description: "Coming Soon...", link: "#stack"},
   {title: "Queue", description: "Coming Soon...", link: "#queue"}
]

export default function DataStructures() {

    return (
        <>
            <div className="flex flex-col justify-content-center align-items-center">
                <div className="border-b-2 border-gray-300 w-100 flex flex-col align-items-center mb-1">
                    <b className="text-lg mt-1">Data Structures</b>
                    <div className="flex flex-row">
                    {
                        dataStructures.map((dataStructure, index) => {
                            return (
                                <Card
                                    key={index}
                                    title={dataStructure.title}
                                    description={dataStructure.description}
                                    link={dataStructure.link}
                                    target="_self"
                                />
                            );
                        })
                    }
                    </div>
                </div>
                <ArrayList />
            </div>
        </>
    );

}

import Card from "../components/card";
import ArrayList from "./arraylist";

type DataStructure = {
    title: string,
    description: string,
    link: string
}

const dataStructures: DataStructure[] = [
   {title: "ArrayList", description: "Interact with an arraylist", link: "#arraylist"},
]

export default function DataStructures() {

    return (
        <div className="flex flex-col justify-content-center align-items-center">
            <h1>Data Structures</h1>
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
            <ArrayList />
        </div>
    );

}

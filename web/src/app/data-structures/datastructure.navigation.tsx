import Card from "../components/card";

type DataStructure = {
    title: string,
    link: string
}

const dataStructures: DataStructure[] = [
   {title: "ArrayList", link: "/data-structures/arraylist"},
   {title: "Stack", link: "/data-structures/stack"},
   {title: "Queue", link: "/data-structures/queue"}
]

export default function DataStructureNavigation() {

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
                                    link={dataStructure.link}
                                    target="_self"
                                />
                            );
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    );

}

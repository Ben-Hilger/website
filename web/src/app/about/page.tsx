import Card from "../components/card";
import CardInfo from "../lib/card";

export default function About() {
    const cards: CardInfo[] = [
        new CardInfo(1, "Railway.app", "ben-hilger.com is hosted using Railway.app, and is deployed using GitHub actions", null),
        new CardInfo(2, "DNS", "ben-hilger.com is registered using SquareSpace domains. Along with that, ben-hilger.com uses SquareSpace namespace servers and services to add more DNS routes", null),
        new CardInfo(4, "NEXT.js", "This website is built using NEXT.js, which uses React server-side components and typescript", null),
    ];
    
    function getCards() {
        return cards.map((card) => {
            return (
                <Card
                    title={card.title}
                    description={card.description}
                    key={card.id}
                />
            );
        });
    }

    return (
        <div className="flex flex-col align-items-center p-2">
            <h1 className="font-bold text-2xl">What&apos;s running ben-hilger.com?</h1>
            <div className="card-list">
                { getCards() }
            </div>
        </div>
    );
}

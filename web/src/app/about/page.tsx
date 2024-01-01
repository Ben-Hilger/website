import Image from "next/image";
import Card from "../components/card";
import CardInfo from "../lib/card";

export default function About() {
    const cards: CardInfo[] = [
        new CardInfo(1, "Google Cloud", "Google Cloud's Compute is the backbone of ben-hilger.com. This provides a virtual machine that runs in the cloud", null),
        new CardInfo(2, "DNS", "ben-hilger.com is registered using SquareSpace domains. Along with that, ben-hilger.com uses SquareSpace namespace server and servcies to add more DNS routes", null),
        new CardInfo(3, "NGINX", "NGINX listens on port 80 and 443 and provides a proxy to route requests to the NEXT.js server, exposing the website to the public", null),
        new CardInfo(4, "NEXT.js", "This website is built using NEXT.js, which uses React server-side components and typescript", null),
        new CardInfo(5, "SSL Certificate Management", "SSL Certificates are used to ensure secure HTTPS communication between your browser and the server. Cert-bot is installed and utilizwed to issue valid certificates for ben-hilger.com", null)
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
            <h1>What&apos;s running ben-hilger.com?</h1>
            <Image className="about-image" src="/personal-website-architecture-diagram.jpg" alt="Personal Website Architecture Diagram" width={841} height={361} />
            <div className="card-list">
                { getCards() }
            </div>
        </div>
    );
}

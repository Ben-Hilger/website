
import Card from "../components/card";
import CardInfo from "../lib/card";

export default function Portfolio() {

    const items: CardInfo[] = [
        new CardInfo(1, "Personal Website", "This project stores the code that runs https://www.ben-hilger.com", "https://github.com/Ben-Hilger/website"),
        new CardInfo(2, "Data Structures", "Here are different data structures displayed in an interactive way to show how they work under the hood", "/data-structures", "_self"),
        new CardInfo(3, "National Holidays", "An open source project that can dynamically generate given holidays (and their observed dates) for a given year", "https://github.com/Ben-Hilger/php-recurring-holidays"),
        new CardInfo(4, "bendev404.com", "Sandbox for exploring and learning the basics of new frameworks and programming languages", "https://www.bendev404.com"),
        new CardInfo(5, "Frontend Masters", "Repository where I host the materials I use in different front-end master courses while learning and reinforcing my knowledge", "https://github.com/Ben-Hilger/frontend-masters"),
        new CardInfo(6, "LeetCode", "This project stores solutions I've written for different LeetCode problems", "https://github.com/Ben-Hilger/LeetCode"),
        new CardInfo(7, "GitHub", "There's a bunch of more small projects I've completed and have hosted on my Github Page. Feel free to take a look!", "https://github.com/Ben-Hilger/"),
   ];

    function getPortfolioItems() {

        return items.map((item: CardInfo) => {
            return (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    target={item.target}
                />
            );
        });
    }

    return (
        <main className="portfolio-list h-100 p-2 background-inherit">

            { getPortfolioItems() }
        </main>
    );
}

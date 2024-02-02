
import Card from "../components/card";
import CardInfo from "../lib/card";

export default function Portfolio() {

    const items: CardInfo[] = [
        new CardInfo(1, "Personal Website", "This project stores the code that runs https://www.ben-hilger.com", "https://github.com/Ben-Hilger/website"),
        new CardInfo(3, "NVIM Config", "This project stores my current configuring for nvim, a terminal-based editor I use for perosnal projects", "https://github.com/Ben-Hilger/nvim-config"), 
        new CardInfo(4, "Data Structures", "Here are different data structures displayed in an interactive way to show how they work under the hood", "/data-structures", "_self"),
        new CardInfo(6, "LeetCode", "This project stores solutions I've written for different LeetCode problems", "https://github.com/Ben-Hilger/LeetCode"),
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

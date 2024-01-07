
import Card from "../components/card";
import CardInfo from "../lib/card";

export default function Portfolio() {

    const items: CardInfo[] = [
        new CardInfo(1, "Personal Website", "This project stores the code that runs https://www.ben-hilger.com", "https://github.com/Ben-Hilger/website"),
        new CardInfo(2, "Advent of Code", "This project stores the code that I write to solve advent of code problems (https://adventofcode.com/)", "https://github.com/Ben-Hilger/advent-of-code"),
        new CardInfo(3, "NVIM Config", "This project stores my current configuring for nvim, a terminal-based editor I use for perosnal projects", "https://github.com/Ben-Hilger/nvim-config"), 
        new CardInfo(4, "Data Structures", "Here are different data structures displayed in an interactive way to show how they work under the hood", "/data-structures", "_self"),
        new CardInfo(5, "Language Basics", "This project is to store the basics of programming languages I'm currently learning.", "https://github.com/Ben-Hilger/language-basics"),
        new CardInfo(6, "LeetCode", "This project stores solutions I've written for different LeetCode problems", "https://github.com/Ben-Hilger/LeetCode"),
        new CardInfo(7, "HilgerCSS", "This is a custom css library that I use to learn more css. This powers the styling of ben-hilger.com", "https://github.com/Ben-Hilger/website/blob/main/web/src/app/hilger.css")
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

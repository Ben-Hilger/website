
import Card from "../components/card";
import CardInfo from "../lib/card";

export default function Portfolio() {

    const items: CardInfo[] = [
        new CardInfo(1, "Personal Website", "This project stores the code that runs https://www.ben-hilger.com", "https://github.com/Ben-Hilger/website"),
        new CardInfo(2, "Advent of Code", "This project stores the code that I write to solve advent of code problems (https://adventofcode.com/)", "https://github.com/Ben-Hilger/advent-of-code"),
        new CardInfo(3, "NVIM Config", "This project stores my current configuring for nvim, a terminal-based editor I use for perosnal projects", "https://github.com/Ben-Hilger/nvim-config"), 
        new CardInfo(4, "Language Basics", "This project is to store the basics of programming languages I'm currently learning.", "https://github.com/Ben-Hilger/language-basics"),
        new CardInfo(5, "LeetCode", "This project stores solutions I've written for different LeetCode problems", "https://github.com/Ben-Hilger/LeetCode"),
        new CardInfo(6, "Data Structures", "Here I've taken time to implement different data structures, currently in C, from scratch to gain a deeper understanding of the underlying logic", "https://github.com/Ben-Hilger/data-structures"),
    ];

    function getPortfolioItems() {

        return items.map((item: CardInfo) => {
            return (
                <Card
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    link={item.link}
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

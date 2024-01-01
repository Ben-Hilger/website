'use client';


class PortfolioItem {
    constructor(public id: number, public title: string, public description: string, public link: string) {}
}

const items: PortfolioItem[] = [
    new PortfolioItem(1, "Personal Website", "This project stores the code that runs https://www.ben-hilger.com", "https://github.com/Ben-Hilger/website"),
    new PortfolioItem(2, "Advent of Code", "This project stores the code that I write to solve advent of code problems (https://adventofcode.com/)", "https://github.com/Ben-Hilger/advent-of-code"),
    new PortfolioItem(3, "NVIM Config", "This project stores my current configuring for nvim, a terminal-based editor I use for perosnal projects", "https://github.com/Ben-Hilger/nvim-config"), 
    new PortfolioItem(4, "Language Basics", "This project is to store the basics of programming languages I'm currently learning.", "https://github.com/Ben-Hilger/language-basics"),
    new PortfolioItem(5, "LeetCode", "This project stores solutions I've written for different LeetCode problems", "https://github.com/Ben-Hilger/LeetCode"),
    new PortfolioItem(6, "Data Structures", "Here I've taken time to implement different data structures, currently in C, from scratch to gain a deeper understanding of the underlying logic", "https://github.com/Ben-Hilger/data-structures"),

];

export default function Portfolio() {

    function navigateToLink(item: PortfolioItem) {
        window.open(item.link, "_blank");
    }

    function getPortfolioItems() {
        return items.map((item) => {
            return (
                <div key={item.id} 
                    className="portfolio-item border-rounded background-01 cursor-pointer pl-1 mb-1"
                    onClick={ () => { navigateToLink(item) } }>
                    <h3>{ item.title }</h3>
                    <p>{ item.description }</p>
                </div>
            );
        });
    }

    return (
        <main className="flex h-100 flex-col p-2 background-inherit">
            { getPortfolioItems() }
        </main>
    );
}

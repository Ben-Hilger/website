import Image from "next/image";
import ImageGallery, { ImageDetails } from "./components/image.gallery";

enum BookState {
    Read, Reading, Not_Read
}

class Book {
    constructor(public id: number, public src: string, public alt: string, public state: BookState) {}
}

const books: Book[] = [
    new Book(1, "https://storage.googleapis.com/hilger-personal-books/lean_startup.jpg", "The Lean Startup", BookState.Read),
    new Book(2, "https://storage.googleapis.com/hilger-personal-books/ego_is_the_enemy.jpg", "Ego is the Enemy", BookState.Read),
    new Book(3, "https://storage.googleapis.com/hilger-personal-books/beyond_disruption.jpg", "Beyond Disruption", BookState.Read),
    new Book(4, "https://storage.googleapis.com/hilger-personal-books/continuous_discovery_habits.jpg", "Continuous Discovery Habits", BookState.Read),
    new Book(5, "https://storage.googleapis.com/hilger-personal-books/ride_of_a_lifetime.jpg", "Ride of a Lifetime", BookState.Read),
    new Book(6, "https://storage.googleapis.com/hilger-personal-books/how_will_you_measure_life.jpg", "How will you measure life?", BookState.Read),
    new Book(7, "https://storage.googleapis.com/hilger-personal-books/algorithms_to_live_by.jpg", "Algorithms to live by", BookState.Read),
    new Book(8, "https://storage.googleapis.com/hilger-personal-books/engineer_survival_guide.jpg", "Engineer Survival Guide", BookState.Read),
    new Book(9, "https://storage.googleapis.com/hilger-personal-books/how_the_mighty_fall.jpg", "How the Mighty Fall", BookState.Read),
    new Book(10, "https://storage.googleapis.com/hilger-personal-books/handling_difficult_people.jpg", "Handling Difficult People", BookState.Read),
    new Book(11, "https://storage.googleapis.com/hilger-personal-books/after_steve.jpg", "After Steve", BookState.Read),
    new Book(12, "https://storage.googleapis.com/hilger-personal-books/the_wealthy_way.jpg", "The Weathly Way", BookState.Read),
    new Book(13, "https://storage.googleapis.com/hilger-personal-books/clean_architecture.jpg", "Clean Architecture", BookState.Reading),
    new Book(14, "https://storage.googleapis.com/hilger-personal-books/clean_code.jpg", "Clean Code", BookState.Reading)
]

export default function Home() {

    function getImages(bookState: BookState) {
        return books
                .filter((book) => book.state === bookState)
                .map((book) => {
                    return new ImageDetails(book.id, book.src, book.alt);
                });
    }

    return (
        <main className="flex h-100 flex-col align-items-center justify-content-between p-2">
            <h1 className="welcome-home">Welcome!</h1>
            <p className="welcome-call-to-action">Thanks for taking the time to visit my website! To begin, take a look at my <a href="/portfolio">portfolio</a> or <a href="https://dev.to/benhilger" target="_blank">blog</a>. If you&apos;re interested in learning about this website, go check out the <a href="/about">about</a> page. </p>   
            <div className="flex flex-col align-items-center">
                <h3>Books I Plan on Reading</h3>
                <ImageGallery images={ getImages(BookState.Not_Read) }/>
            </div>  
            <div className="flex flex-col align-items-center">
                <h3>Books I Am Reading</h3>
                <ImageGallery images={ getImages(BookState.Reading) }/>
            </div> 
            <div className="flex flex-col align-items-center">
                <h3>Books I Have Read</h3>
                <ImageGallery images={ getImages(BookState.Read) }/>
            </div>
        </main>
    )
}


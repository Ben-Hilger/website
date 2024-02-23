import ImageGallery, { ImageDetails } from "./components/image.gallery";
import { books, BookState} from "./lib/book";

export default function Home() {

    function getImages(bookState: BookState) {
        return books
                .filter((book) => book.state === bookState)
                .map((book) => {
                    return new ImageDetails(book.src, book.alt);
                });
    }

    return (
        <main className="flex h-100 flex-col align-items-center justify-content-between p-2">
            <h1 className="welcome-home">Welcome!</h1>
            <p className="welcome-call-to-action">Thanks for taking the time to visit my website! To begin, take a look at my <a className="text-blue-600" href="/portfolio">portfolio</a> or <a className="text-blue-600" href="https://dev.to/benhilger" target="_blank">blog</a>. If you&apos;re interested in learning about this website, go check out the <a className="text-blue-600" href="/about">about</a> page. </p>
        </main>
    )
}


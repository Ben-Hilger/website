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
            <div className="flex flex-col align-items-center">
                <h3>Books I Use for Reference</h3>
                <ImageGallery images={ getImages(BookState.Reference) }/>
            </div>

        </main>
    )
}


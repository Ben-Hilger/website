import {books, BookState} from "@/app/lib/book";
import ImageGallery, {ImageDetails} from "@/app/components/image.gallery";

export default function Home() {

    function getImages(bookState: BookState) {
        let imageDetails: ImageDetails[] = [];
        books.forEach((book) => {
            if (book.state === bookState) {
                imageDetails.push(new ImageDetails(book.src, book.alt));
            }
        })
        return imageDetails
    }

    return (
        <main className="flex h-100 flex-col align-items-center justify-content-between p-2">
            <h1 className="text-2xl font-bold">Book List</h1>
            <p className="text-xl font-medium">This list contains books I have read, plan on reading, and am currently reading</p>
            <div className="flex flex-col align-items-center">
                <h3 className="text-lg mt-1 font-bold dark:text-white">Books I Am Reading</h3>
                <ImageGallery images={ getImages(BookState.Reading) }/>
            </div>
            <div className="flex flex-col align-items-center mt-1">
                <h3 className="text-lg font-bold dark:text-white">Books I Plan on Reading</h3>
                <ImageGallery images={ getImages(BookState.Not_Read) }/>
            </div>
            <div className="flex flex-col align-items-center mt-1">
                <h3 className="text-lg font-bold dark:text-white">Books I Have Read</h3>
                <ImageGallery images={ getImages(BookState.Read) }/>
            </div>
        </main>
    )
}


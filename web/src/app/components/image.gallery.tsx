import Image from "next/image";

export class ImageDetails {
    constructor(public src: string, public alt: string) {}
}

interface ImageGalleryProps {
    images: ImageDetails[]
}

export default function ImageGallery(props: ImageGalleryProps) {
    
    function isScrolling() {
        // return window.innerWidth < props.images.length * 150 * 2;
        return props.images.length >= 10;
    }

    function getImageGalleryId() {
        if (isScrolling()) {
            return "image-gallery";
        }
        return "";
    }

    function getImages() {
        let imagesToMap = props.images;
        if (isScrolling()) {
            imagesToMap.push(...props.images);
        }
        return imagesToMap.map((image, index) => {
           return (
            <Image className="scroll-image ml-1 mr-1" key={index} src={image.src} alt={image.alt} width={150} height={225} />
           );
        });
    }

    return (
        <div id={ getImageGalleryId() }>
            { getImages() }

        </div>
    );
}

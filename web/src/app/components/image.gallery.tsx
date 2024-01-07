import Image from "next/image";

export class ImageDetails {
    constructor(public src: string, public alt: string) {}
}

interface ImageGalleryProps {
    images: ImageDetails[]
}

export default function ImageGallery(props: ImageGalleryProps) {
    
    const isScrolling = props.images.length >= 10;

    function getImageGalleryClass() {
        let base = "image-gallery flex flex-row";
        if (isScrolling) {
            base += " overflow-scroll"
        }
        return base;
    }

    function getDuplicateImages() {
        if (!isScrolling) {
            return <></> 
        }
        return props.images.map((image, index) => {
            return (
                <Image className="scroll-image-extra ml-1 mr-1" 
                    key={index} 
                    src={image.src}
                    alt={image.alt} 
                    width={150} 
                    height={225} />
                
            );
        })
    }

    function getImages() {
        let imagesToMap = props.images;
        return imagesToMap.map((image, index) => {
           return (
            <Image className="scroll-image ml-1 mr-1" 
                    key={index} 
                    src={image.src}
                    alt={image.alt} 
                    width={150} 
                    height={225} />
           );
        });
    }

    return (
        <div className="flex flex-row">
            <div className={ getImageGalleryClass() }>
                { getImages() }  
            </div>
        </div>
    );
}

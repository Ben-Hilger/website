import Image from "next/image";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

interface CardProps {
  title: string,
  description: string,
  createdByUser: string,
  createdDate: Date,
  imageSrc?: string,
  imageSrcAlt?: string,
  cardLink?: string
}

export default function Card(props: CardProps) {

  function getFormattedDate(): string {
    let options: Intl.DateTimeFormatOptions = {
      month: 'short', day: '2-digit', year: 'numeric'
    }
    return Intl.DateTimeFormat(undefined, options).format(props.createdDate);
  }

  function getImageSection() {
    if (props.imageSrc) {
      return (<Image 
        width={200}
        height={25}
        src={props.imageSrc}
        alt={props.imageSrcAlt ?? ""}
      />);
    }
    return (<></>);
  }

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex lg:justify-center mb-2">
      { getImageSection() }
      <div className="w-75 border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{ props.title }</div>
          <p className="text-gray-700 text-base">{ props.description }</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{ props.createdByUser }</p>
            <p className="text-gray-600">{ getFormattedDate() }</p>
          </div>
        </div>
      </div>
    </div>
  );
}
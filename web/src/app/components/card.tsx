'use client';

interface CardProps {
    title: string,
    description: string,
    link?: string|null
    target?: string|null
}

export default function Card(props: CardProps) {

    function navigateTo() {
       if (!props.link) {
           return;
       }
       window.open(props.link, props.target ?? "_blank");
    }

    function getClasses() {
        let base = "border-01 border-rounded p-1 m-1";
        if (props.link) {
            base += " cursor-pointer";
        }
        return base;
    }

    return (
    <div className={ getClasses() } onClick={() => { navigateTo() }}>
        <b className="text-lg">{ props.title }</b>
        <p>{ props.description }</p>
    </div>
  );
}

import Link from "next/link";

interface LinkProps {
  label: string,
  isSelected: boolean,
  href: string,
  target?: string
}

export default function LinkItem(props: LinkProps) {

  const target = props.target ?? ""
  function getClass() {
    var base = "block p-0_5 ";
    if (props.isSelected) {
      base += "text-selected";
    } else {
      base += "text-02 text-hover-select";
    }
    return base;
  }

  return (
    <Link
      target={ target }
      href={ props.href }
      className={ getClass() }
    >{ props.label }</Link>
  );
}

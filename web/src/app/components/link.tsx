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
    var base = "block py-2 px-3 rounded md:p-0 ";
    if (props.isSelected) {
      base += "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
    } else {
      base += "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
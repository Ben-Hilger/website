interface ButtonProps {
  label: string,
  type: ButtonType,
  onClick: Function,
  className?: string
}

export enum ButtonType {
  Primary
}

export default function ActionButton(props: ButtonProps) {

  function getClass() {
    let className = "";
    if (props.type === ButtonType.Primary) {
      className += "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
    }

    if (props.className) {
      className += ` ${props.className}`;
    }
    return className;
  }

  return (
    <button type="button" 
          className={ getClass() }
          onClick={ props.onClick() }>
        { props.label }
    </button>
  );
}
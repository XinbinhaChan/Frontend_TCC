import { Link } from "react-router-dom";

export function Links(props) {
  return (
    <Link
      to={props.link}
      className="text-texto-branco font-texto-normal cursor-pointer hover:text-texto-azul duration-400"
    >
      {props.texto}
    </Link>
  );
}
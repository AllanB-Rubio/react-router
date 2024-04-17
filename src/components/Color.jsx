import { useParams } from "react-router-dom";

export default function Color() {

  let { color } = useParams();

  return (
    <div className={color}>
      <h1>{color}</h1>
    </div>
  );
}

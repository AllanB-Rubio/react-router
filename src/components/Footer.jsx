import { Link } from "react-router-dom";


export default function Footer () {
    return (
        <div id="footer-container">
      <Link to={"/footer/purple"}>Purple</Link>
      <Link to={"/footer/yellow"}>Yellow</Link>
      <Link to={"/footer/green"}>Green</Link>
    </div>
    );
}
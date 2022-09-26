import Link from "./Link"
import { NavS } from "./styles";
import logo from "../assets/starlogo2.jpg"

const Navbar = () => (
    <NavS>
        <div className="headContainer">
            <h1 id="title">StarWars</h1>
            <img src={logo} alt="x" />
        </div>
        <nav>
            <ul>
                <li type="none"><Link className="linkNav" to={"/"}><p>HOME</p></Link></li>
                <li type="none"><Link className="linkNav" to={"/ships/"}><p>SHIPS</p></Link></li>
            </ul>
        </nav>
    </NavS>
)

export default Navbar;
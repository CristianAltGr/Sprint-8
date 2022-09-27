import Link from "./Link"
import { NavS } from "./styles";
import logo from "../assets/starlogo2.jpg"
import Login from "./login";
//use context para ver si tenemos activado el susuario en primera instancia luego localestorage para mirar usuarios.
const Navbar = () => (
    <NavS>
        <div className="headContainer">
            <h1 id="title">StarWars</h1>
            <img src={logo} alt="x" />
        </div>
        <div className="LogNav">
            <Login text="LOG IN" action="INTRODUCE YOUR DATA" />
            <Login text="SIGN UP" action="CREATE YOUR PROFILE" />
        </div>
        <nav>
            <ul>
                <li type="none"><Link className="linkNav" to={"/"}><p>HOME</p></Link></li>
                <li type="none"><Link className="linkNav" to={"/ships/"}><p>SHIPS</p></Link></li>
            </ul>
        </nav>
    </NavS >
)

export default Navbar;
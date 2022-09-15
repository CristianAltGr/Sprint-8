import Link from "./Link"
const Navbar = () => (
    <>
        <h1>StarWars</h1>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/ships/"}>Ships</Link></li>
            </ul>
        </nav>
    </>
)

export default Navbar;
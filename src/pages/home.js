import Link from "../components/Link";
import { HomeS } from "../components/styles";


const Home = () => {

    return (

        <HomeS>
            <section>
                <h2>Welcome to Star Wars papers!</h2>
                <p>In this page you can check all the info about the starships in any movie of starwars. <br />
                    You can read the info like a pilot and check all the details with us! All the star ships are ready in the <b>hangar</b>.
                </p>
            </section>

            <Link className="linkHome" to={"/ships/"}>Go to the hangar!</Link>


        </HomeS>

    );
}
export default Home;
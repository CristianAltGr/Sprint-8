import Link from "../components/Link";
import { HomeS } from "../components/styles";


const Home = () => {

    return (

        <HomeS>
            <section>
                <h2>Welcome to Star Wars papers!</h2>
                <p>In this page you can check all the info about the starships in any movie of starwars. <br />
                    You can read the info like a pilot and check all the details with us! All the star ships are ready in the hangar.
                </p>

                <p> IMPORTANT : The ships section is only for <b>members</b>, this is totaly free, so come on! Log at us page!</p>
            </section>

            <Link className="linkHome" to={"/ships/"}>Go to the hangar!</Link>
        </HomeS>

    );
}
export default Home;
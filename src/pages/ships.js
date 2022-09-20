import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "../components/Link";
/*import { useContext } from "react";
import { AppContext } from "../aplication/provider";*/

const APISHIPS = "https://swapi.dev/api/starships/";

const Ships = () => {

    const [ships, setShips] = useState([]);

    useEffect(() => {
        //const request: Joke = await fetch(APIJOKE,{headers: {'Accept': 'application/json'}})
        //.then((res) => res.json())
        axios.get(APISHIPS).then((res) => { setShips(res.data.results) });
    }, []);


    return (

        <div>
            {ships.map(ship => {

                const id = (ship.url.match(/\d/g)).join("");
                return (
                    <div key={ship.created}>
                        <Link to={"/ships/shipInfo/" + id}> {ship.name}</Link>
                        <p> {ship.model}</p>
                    </div>
                )
            })}
        </div >
    );
}

export default Ships;
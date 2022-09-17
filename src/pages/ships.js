import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "../components/Link";
import { useContext } from "react";
import { AppContext } from "../aplication/provider";

const Ships = () => {

    const [ships, setShips] = useState([]);
    const [shipSelect, setSelect] = useContext(AppContext);

    useEffect(() => {
        //const request: Joke = await fetch(APIJOKE,{headers: {'Accept': 'application/json'}})
        //.then((res) => res.json())
        axios.get("https://swapi.dev/api/starships/").then((res) => { setShips(res.data.results) });

    }, []);

    return (

        <div>
            {ships.map(ship => {
                return (
                    <div key={ship.created}>
                        <Link to={"/ships/shipInfo/"} onClick={() => { setSelect(ship) }}>{ship.name}</Link>
                        <p> {ship.model}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default Ships;
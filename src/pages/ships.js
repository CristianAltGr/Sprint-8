import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "../components/Link";
import InfiniteScroll from "react-infinite-scroll-component";
/*import { useContext } from "react";
import { AppContext } from "../aplication/provider";*/

const APISHIPS = "https://swapi.dev/api/starships/?page=";

const Ships = () => {

    const [ships, setShips] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        //const request: Joke = await fetch(APIJOKE,{headers: {'Accept': 'application/json'}})
        //.then((res) => res.json())
        axios.get(APISHIPS + page).then((res) => { setShips(res.data.results) });
    }, [, page]);


    return (
        <InfiniteScroll dataLength={ships.length} hasMore={true} next={() => setPage((prevPage) => prevPage + 1)}>
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
        </InfiniteScroll>
    );
}

export default Ships;
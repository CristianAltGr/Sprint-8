import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Link from "../components/Link";
import InfiniteScroll from "react-infinite-scroll-component";
import { ShipsListS } from "../components/styles";


const APISHIPS = "https://swapi.dev/api/starships/?page=";

const Ships = () => {

    const [ships, setShips] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMoreFilms, setMore] = useState(true);

    useEffect(() => {
        axios.get(APISHIPS + page).then((res) => {
            setShips((prevMovies) => page === 1 ? res.data.results : prevMovies.concat(res.data.results));
            setMore(page >= 4 ? false : true);
        })
    }, [page]);


    return (
        <InfiniteScroll dataLength={ships.length} hasMore={hasMoreFilms} next={() => setPage((prevPage) => prevPage + 1)} scrollThreshold={0.4}>

            {ships.map(ship => {

                const id = (ship.url.match(/\d/g)).join("");
                return (
                    <ShipsListS key={ship.created}>
                        <Link to={"/ships/shipInfo/" + id} className="ship"> {ship.name}</Link>
                        <p> {ship.model}</p>
                    </ShipsListS>
                )
            })}

        </InfiniteScroll>
    );
}

export default Ships;
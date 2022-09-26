import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { StarShipS, ShipImg } from "../components/styles";
import defaultImg from "../assets/autostop.jpg"

const ShipInfo = () => {

    const [selectShip, setSelect] = useState([]);
    const urlShip = useParams();
    const APISHIPS = "https://swapi.dev/api/starships/";
    const APIIMGSHIP = "https://starwars-visualguide.com/assets/img/starships/" + urlShip.id + ".jpg";


    useEffect(() => {
        axios.get(APISHIPS + urlShip.id).then((res) => { setSelect(res.data) });
    }, [urlShip]);


    return (
        <StarShipS>
            <ShipImg img={APIIMGSHIP} defaultImg={defaultImg}></ShipImg>
            <h4>{selectShip.name}</h4>
            <div border="1">
                <ul>
                    <li type="none" ><p>Model: {selectShip.model}</p></li>
                    <li type="none"><p>Cost in credits: {selectShip.cost_in_credits}</p></li>
                    <li type="none"><p>Length: {selectShip.length}</p></li>
                    <li type="none"><p>Max. atmosphering speed: {selectShip.max_atmosphering_speed}</p></li>
                    <li type="none"><p>Crew: {selectShip.crew}</p></li>
                </ul>
                <ul>
                    <li type="none"><p>Passengers: {selectShip.passengers}</p></li>
                    <li type="none"><p>Cargo capacity: {selectShip.cargo_capacity}</p></li>
                    <li type="none"><p>Consumables: {selectShip.consumables}</p></li>
                    <li type="none"><p>Hyperdrive rating: {selectShip.hyperdrive_rating}</p></li>
                    <li type="none"><p>MGLT: {selectShip.MGLT}</p></li>
                    <li type="none"><p>Starship class: {selectShip.starship_class}</p></li>
                </ul>
            </div>
        </StarShipS>
    )
}

/* "model": "Sentinel-class landing craft",
    "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks",
    "cost_in_credits": "240000",
    "length": "38",
    "max_atmosphering_speed": "1000",
    "crew": "5",
    "passengers": "75",
    "cargo_capacity": "180000",
    "consumables": "1 month",
    "hyperdrive_rating": "1.0",
    "MGLT": "70",
    "starship_class": "landing craft",
    "pilots": [],
    "films": [
        "https://swapi.dev/api/films/1/"
    ],
    "created": "2014-12-10T15:48:00.586000Z",
    "edited": "2014-12-20T21:23:49.873000Z",
    "url": "*/

export default ShipInfo;
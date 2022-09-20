import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const ShipInfo = () => {

    const [selectShip, setSelect] = useState([]);
    const urlShip = useParams();
    const APISHIPS = "https://swapi.dev/api/starships/";
    const APIIMGSHIP = "https://starwars-visualguide.com/assets/img/starships/" + urlShip.id + ".jpg"
    //config img errorp   
    useEffect(() => {
        axios.get(APISHIPS + urlShip.id).then((res) => { setSelect(res.data) });
    }, [urlShip]);


    return (
        <>
            <img src={APIIMGSHIP} alt="Image of starship" />
            <h4>{selectShip.name}</h4>
            <div border="1">
                <ul>
                    <li>Model: {selectShip.model}</li>
                    <li>Cost in credits: {selectShip.cost_in_credits}</li>
                    <li>Length: {selectShip.length}</li>
                    <li>Max. atmosphering speed: {selectShip.max_atmosphering_speed}</li>
                    <li>Crew: {selectShip.crew}</li>
                </ul>
                <ul>
                    <li>Passengers: {selectShip.passengers}</li>
                    <li>Cargo capacity: {selectShip.cargo_capacity}</li>
                    <li>Consumables: {selectShip.consumables}</li>
                    <li>Hyperdrive rating: {selectShip.hyperdrive_rating}</li>
                    <li>MGLT: {selectShip.MGLT}</li>
                    <li>Starship class: {selectShip.starship_class}</li>
                </ul>
            </div>
        </>
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
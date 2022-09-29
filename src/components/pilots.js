import React from "react";
import axios from "axios";
import { useState } from "react";
import { BackClick, CardPilot, Conector } from "./styles";

const Pilots = ({ list }) => {

    const [card, setCard] = useState(false);
    const [i, setI] = useState(1);
    const [pilot, setPilot] = useState({});

    const initPilot = () => {

        if (list.length > 0) {
            setCard(true);
            axios.get(list[0]).then((res) => { setPilot(res.data) });
        }
    }

    const nextPilot = () => {

        if (i < list.length) {
            axios.get(list[i]).then(res => {
                setPilot(res.data);
            });
            setI(i + 1);
        }
    }

    return (
        <>
            <Conector onClick={initPilot}>Pilots</Conector>

            {card &&
                <>
                    <BackClick onClick={() => { setCard(false) }} />
                    <CardPilot>
                        <h5>{pilot.name}</h5>
                        <div>
                            <p>Height:  {pilot.height} </p>
                            <p>Mass:  {pilot.mass}</p>
                            <p>Hair color: {pilot.hair_color}</p>
                            <p>Skin color: {pilot.skin_color}</p>
                            <p>Eye color:  {pilot.eye_color}</p>
                            <p>Birth year:  {pilot.birth_year} </p>
                            <p>gender:  {pilot.gender}</p>
                        </div>
                        <button onClick={nextPilot}>Next pilot</button>
                    </CardPilot>
                </>

            }
        </>
    );

}

export default Pilots;
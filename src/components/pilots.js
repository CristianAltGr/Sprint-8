import React from "react";
import axios from "axios";
import { useState } from "react";
import { BackClick, CardExtraInfo, Conector } from "./styles";

const Pilots = ({ list }) => {

    const [card, setCard] = useState(false);
    const [i, setI] = useState(1);
    const [pilot, setPilot] = useState({});

    const initPilot = async () => {

        if (list.length > 0) {
            setCard(true);
            setI(1);
            await axios.get(list[0]).then((res) => { setPilot(res.data) });
        }
    }

    const nextPilot = async () => {

        if (i < list.length) {
            await axios.get(list[i]).then(res => {
                setPilot(res.data);
            });
            setI(i + 1);
        }
    }

    return (
        <>
            <Conector onClick={initPilot}>PILOTS</Conector>

            {card &&
                <>
                    <BackClick onClick={() => { setCard(false) }} />
                    <CardExtraInfo>
                        <h5>{pilot.name}</h5>
                        <div>
                            <p>Height:  {pilot.height} </p>
                            <p>Mass:  {pilot.mass}</p>
                            <p>Hair color: {pilot.hair_color}</p>
                            <p>Skin color: {pilot.skin_color}</p>
                            <p>Eye color:  {pilot.eye_color}</p>
                            <p>Birth year:  {pilot.birth_year} </p>
                            <p>gender:  {pilot.gender}</p>
                            <p>Pilots : {i} / {list.length}</p>
                        </div>
                        <button onClick={nextPilot}>Next pilot</button>
                    </CardExtraInfo>
                </>

            }
        </>
    );

}

export default Pilots;
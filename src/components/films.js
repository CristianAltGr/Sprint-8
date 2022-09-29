import React from "react";
import axios from "axios";
import { useState } from "react";
import { Conector, BackClick, CardPilot } from "./styles";

const Films = ({ list }) => {

    const [card, setCard] = useState(false);
    const [i, setI] = useState(1);
    const [film, setFilm] = useState({});

    const initFilm = () => {

        if (list.length > 0) {
            setCard(true);
            axios.get(list[0]).then((res) => { setFilm(res.data) });
        }
    }

    const nextFilm = () => {

        if (i < list.length) {
            axios.get(list[i]).then(res => {
                setFilm(res.data);
            });
            setI(i + 1);
        }
    }

    return (
        <>
            <Conector onClick={initFilm}>Films</Conector>

            {card &&
                <>
                    <BackClick onClick={() => { setCard(false) }} />
                    <CardPilot>
                        <h5>{film.title}</h5>
                        <div>

                        </div>
                        <button onClick={nextFilm}>Next Film</button>
                    </CardPilot>
                </>

            }
        </>
    );

}
/*"title": "A New Hope",
   "episode_id": 4,
   "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
   "director": "George Lucas",
   "producer": "Gary Kurtz, Rick McCallum",
   "release_date": "1977-05-25", */
export default Films;
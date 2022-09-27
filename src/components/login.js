import React from "react";
//import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LogInCard, LogInButton } from "./styles";

const Login = ({ text, action }) => {

    const [logged, setLogged] = useState(false);

    const [logCard, setLogCard] = useState(false);
    const [user, setUser] = useState({ name: "", password: "" });
    const [listUsers, setListUsers] = useState(JSON.parse(localStorage.getItem(`users`)) || []);

    const loginCard = (event) => {
        event.preventDefault();

        if (!logCard) {
            setLogCard(true);
            setLogged(false); //For easy checking the log state change to false when click the logCard 
        }
    }

    const saveData = (event) => {

        const target = event.target;

        if (target.id === "nameUser") {
            setUser({ name: target.value, password: user.password })
        } else if (target.id === "passwordUser") {
            setUser({ name: user.name, password: target.value })
        }
    }

    const saveUser = (event) => {
        event.preventDefault();

        const found = listUsers.includes(user);

        if (!found) {
            setListUsers([...listUsers, user]);
        } else {
            alert("This user exist in the database.")
        }
    }

    const checkUsers = (event) => {
        event.preventDefault();

        const found = listUsers.includes(user);

        if (found === true) {
            setLogCard(false);
        } else {
            alert("Please, log in the app for check the data of Starships")
        }

        setLogged(found); //this state is for check in all the app you're logged
    }


    useEffect(() => {

        localStorage.setItem(`users`, JSON.stringify(listUsers));
        console.log("LLista d'usuaris per la correció: ", listUsers);
    }, [listUsers])


    return (
        <>
            <LogInButton onClick={loginCard}><p>{text}</p></LogInButton>

            {logCard &&
                <LogInCard>
                    <form>
                        <p>{action}</p>
                        <input type="text" name="nameUser" id="nameUser" placeholder="Email" onChange={saveData} />
                        <input type="password" name="passwordUser" id="passwordUser" placeholder="Password" onChange={saveData} />
                        <div>
                            <button onClick={checkUsers}>Log in</button>
                            <button onClick={saveUser}>Sign up</button>

                        </div>
                    </form>

                </LogInCard>}
        </>

    )
}

export default Login;
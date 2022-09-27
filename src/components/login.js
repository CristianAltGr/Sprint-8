import React from "react";
//import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { LogInCard, LogInButton } from "./styles";

const Login = () => {

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

        const found = listUsers.some(e => e.name === user.name);

        if (found) {
            alert("This user exist in the database.")
        } else {
            setListUsers([...listUsers, user]);
        }
    }

    const checkUsers = (event) => {
        event.preventDefault();

        const found = listUsers.some(e => e.name === user.name);

        if (found) {
            setLogCard(false);
        } else {
            alert("Please, log in the app for check the data of Starships")
        }

        setLogged(found);
    }


    useEffect(() => {

        localStorage.setItem(`users`, JSON.stringify(listUsers));
        console.log("LLista d'usuaris per la correció: ", listUsers);
    }, [listUsers])


    return (
        <>
            <LogInButton onClick={loginCard}><p>LOG IN</p></LogInButton>
            <LogInButton onClick={loginCard}><p>SIGN UP </p></LogInButton>

            {logCard &&
                <LogInCard>
                    <form>
                        <p>WELCOME STAR WARS HANGAR</p>
                        <input type="text" name="nameUser" id="nameUser" placeholder="Email" onChange={saveData} />
                        <input type="password" name="passwordUser" id="passwordUser" placeholder="Password" onChange={saveData} />
                        <div>
                            <button onClick={checkUsers}>Log in</button>
                            <button onClick={saveUser}>Sign up</button>
                            <button onClick={() => { setListUsers([]) }}>Delete user list</button>
                        </div>
                    </form>
                </LogInCard>}
        </>

    )
}

export default Login;
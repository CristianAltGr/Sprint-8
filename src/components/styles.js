import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    background-color: black;
    padding: 0;
    font-family: 'Pathway Gothic One', sans-serif, Helvetica, Arial;
    color: #aaa;
    font-weight: 600;
    text-decoration: none;
    font-size: 2vh;
    letter-spacing: 0.05vh;
}
`

export const NavS = styled.nav`

    display: grid;
    height: 40vh;
    grid-template-rows: 60% 40%;
    grid-template-columns: 2fr 3fr 2fr;
    
    .headContainer{
            grid-column-start: 2;
            display: flex;
            justify-content: center;
            align-content: center;
            height: 40vh;
            margin: 10px;
            padding-bottom: 10px;

        h1{
            display: none;
        }

        img{
            height: 20vh;
            width: 40vh;
            margin-bottom: 10px;
        }
    }

    nav{
        grid-row: 2;
        grid-column: 1 / 4 ;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 7vh;
        border-bottom: 1px solid  rgba(179, 149, 149, 0.603);
        border-top: 1px solid  rgba(179, 149, 149, 0.603);
    }
     
    nav ul{
        display: flex;
        flex-direction: row;
        margin: 0;
        width: 30vh;
        height: 100%;
        justify-content: space-around;
        align-content: center;
    }

    li{
        display: flex;
        justify-content: center;
        align-content: center;
        border-left: 1px solid  rgba(179, 149, 149, 0.603);   
        border-right: 1px solid  rgba(179, 149, 149, 0.603);    
        width: 15vh;

        .linkNav :hover{
            color: white;
            transition: 0,5s;
        }

        .logNav{
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }

`
export const LogInButton = styled.button`
    
    height: 6vh;
    width: 13vh;
    margin: 2vh;
    margin-top: 10vh;
    
    p:hover{
        color: white;
        transition: 0.5s;
    }
`

export const LogInCard = styled.div`
    position: absolute;
    z-index: 1;
    background-color: #80808075;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    form{
        height: 55%;
        width: 40%;
        display: grid;
        
        p{
            text-align: center;
            margin-top: 3vh ;
            margin-bottom: 0;
            font-size: 5vh;
            font-weight: 300;
            color: rgb(252, 239, 55);

        }

        input{
            width: 80%;
            height: 7vh;
            margin: auto;
            background-color: white;
            color: #aaa;
            text-align: center;
            font-weight: 300;
            border-radius: 7px;
        }

        div{
            display: flex;
            align-content: space-around ;
        }

        button{
            width: 40%;
            height: 7vh;
            margin: auto;
            margin-top: 5vh;
            background-color: #80808075;
            color: white;
            font-weight: 300;
            border-radius: 7px;

            :hover{
                background-color: #3e3ef1;
                transition: 0.5s;
            }
        }
    }

`

export const HomeS = styled.div`

    display: grid;
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 20% 60% 20%;
    

    section{
        grid-column: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-content: center;
        text-align: center;

        h2{
            font-size: 5vh;
            color: #feda4a;
        }

        p{
            color: #feda4a;
        }

        b{
            color: #feda4a;
            font-weight: bolder;
        }
    }

    .linkHome{
        grid-area: 2 / 2;
        align-self: center;
        justify-self: center;
        border: 1px solid  rgba(179, 149, 149, 0.603);
        padding: 3vh;
        
        :hover{
            color: white;
            transition: 0,5s ;
        }
    }

`

export const ShipsListS = styled.div`   

    display: flex;
    flex-direction: column;
    align-items: space-around;
    width: 65%;
    height: 12vh;
    margin: auto;
    margin-top: 4vh;
    background-color: rgb(46, 44, 44);

    .ship{
        font-weight: bold;
        letter-spacing: 0.1vh;
        margin: 2vh;
        background-color: rgb(46, 44, 44);
        text-transform: uppercase;

        :hover{
            color: white;
        }
    }

    p{
        margin: 2vh;
        margin-top: 0;
        background-color: rgb(46, 44, 44);
    }
`

export const StarShipS = styled.div`
    
    display: grid;
    grid-template-rows: 3fr 1fr 4fr;
    grid-template-columns: 65%;
    justify-content: center;
    

    h4{
        
        font-size: 4vh;
        letter-spacing: 0.1vh;
        font-weight: 500;
        text-transform: uppercase;
    }

    div{
        display: flex;
        justify-content: space-between;
        margin-right: 10vh;
    }

    p{
        color: rgb(90, 77, 77);
    }
`

export const ShipImg = styled.div`
    
    margin: auto;
    height: 18em;
    width: 100%;
    padding: 10px;
    border-bottom: 6px solid rgb(100, 41, 41);
    background-image: url(${(props) => props.img}),url(${(props) => props.defaultImg});
    background-size: 80% 80%;
    background-position: center;
    background-clip: padding-box;
    background-repeat: no-repeat;
` 
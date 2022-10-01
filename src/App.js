import Provider from "./aplication/provider";
import Router from "./aplication/routes";
import { GlobalStyle } from "./components/styles";


const App = () => {

    return (

        <Provider>
            <GlobalStyle />
            <Router />
        </Provider>

    )

}


export default App;

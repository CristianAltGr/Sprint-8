import { screen, render } from "@testing-library/react";
import Home from "../pages/home"
import Provider from "../aplication/provider"
import { BrowserRouter } from "react-router-dom"
describe('Home', () => {

    it('must display a title home', () => {
        render(<BrowserRouter><Home /></BrowserRouter>), { wrapper: Provider };
        expect(screen.queryByText(/Welcome to Star Wars papers/i)).toBeInTheDocument();
    });
});
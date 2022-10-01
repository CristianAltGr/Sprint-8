import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ShipInfo from "../pages/shipInfo";


describe('ShipInfo', () => {

    test('must be a header', () => {

        render(<BrowserRouter><ShipInfo /></BrowserRouter>);

        const name = screen.getByRole("heading");

        expect(name).toBeInTheDocument();
    })
});

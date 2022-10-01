import { screen, render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Ships from "../pages/ships";

test('must be a link list', async () => {

    render(<BrowserRouter><Ships /></BrowserRouter>);

    await waitFor(() => {

        expect(screen.getAllByRole("link")).toHaveLength(10);
    }, { timeout: 1000 })
})
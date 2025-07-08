// testing header component

import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("Should render header component with a login button", () => {
    
        render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>

        );

        const loginButton = screen.getByRole("button", {name: "Login"}); // getByText("Login")

        expect(loginButton).toBeInTheDocument();
});

it("Should render component with Cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    expect(screen.getByText(/Cart/)).toBeInTheDocument();

});

it("Should change login button to logout button on Click",() => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', {name: 'Login'});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
} )
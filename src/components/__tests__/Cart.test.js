import {render,screen, act, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantMenu from "../RestaurantMenu"
import Header from "../Header "
import MOCK_DATA from "../mocks/PizzaHutResMenuCategory"
import { Provider } from "react-redux";
import {appStore} from "../../utils/appStore";

    global.fetch = jest.fn(() => 
        Promise.resolve({
            json: () => Promise.resolve(MOCK_DATA),
        })
    );

it("Should render card comp and select items and add it to cart", async () => {

    await act(async () => render(
    <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
    </Provider>
    ));

    const accordionHeader = screen.getByText("Veg Pizza (13)");

    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(13);


})

import {screen, render, act, fireEvent} from '@testing-library/react'
import Body from '../Body'
import MOCK_DATA from '../mocks/restaurantAPIdata.json'
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
        return Promise.resolve({
            json: () => {
                return Promise.resolve(MOCK_DATA);
            },
        });
}); 

it("Should search restaurant list for coffee text input", async () => {

    await act(async () => 
    
        render
        (
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    );

    const cardsBeforeSearch = screen.getAllByTestId('resCard');
    
    expect(cardsBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole('button', {name: 'Search'});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: {value: "Coffee"} });

    fireEvent.click(searchBtn);

    // screen should load 2 cards, cozz currently in your api you have 2 coffee filter

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2);

});
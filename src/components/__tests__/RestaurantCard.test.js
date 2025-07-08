import RestaurantCard from '../RestaurantCard'
import { render, screen } from '@testing-library/react'
import MOCK_DATA from '../mocks/restaurantCardMockData.json'
import '@testing-library/jest-dom'


it("Should render RestaurantCard component with props data", () => {

    render(
        <RestaurantCard resData = {MOCK_DATA}/>
    )

        const resName = screen.getByText('Meghana Foods');

        expect(resName).toBeInTheDocument();
    
});
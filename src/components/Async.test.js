import { render, screen } from '@testing-library/react';
import Async from './Async';

describe("Async Component", ()=> {
    test('renders post if request succeeds', async ()=> {
        // Arrange
        render(<Async></Async>)
        

        // Act
        // nothing

        //Assert
        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0)
    })
})
 import Greeting from "./Greeting";
import { render, screen } from '@testing-library/react';


describe("Greeting Component", ()=> {
    test("render hello world", () => {
        // Arrange 
        render(<Greeting />);

        //Act
        // nothing

        // Assert
        const helloWorkElement = screen.getByText('Hello World', { exact: true });
        expect(helloWorkElement).toBeInTheDocument()
    })
})

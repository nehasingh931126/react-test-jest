 import Greeting from "./Greeting";
import { render, screen, fireEvent } from '@testing-library/react';
// import fireEvent from "@testing-library/user-event";

describe("Greeting Component", ()=> {
    test("render hello world", () => {
        // Arrange 
        render(<Greeting />);

        //Act
        // nothing

        // Assert
        const helloWorkElement = screen.getByText('Hello World', { exact: true });
        expect(helloWorkElement).toBeInTheDocument()
    });

    

    test("render good to see you if the button clicked", () => {
        // Arrange 
        render(<Greeting />);

        //Act
        // nothing

        // Assert
        const goodToSeeYouElement = screen.getByText(`It's good to see you`, { exact: false });
        expect(goodToSeeYouElement).toBeInTheDocument();
    })

    test("render changed button clicked", () => {
        // Arrange 
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement)

        // Assert
        const changedText = screen.getByText(`Changed`, { exact: true });
        expect(changedText).toBeInTheDocument();
    });

    test("does not render good to see you if the button was clicked", () => {
        // Arrange 
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement)

        // Assert
        const outputText = screen.queryByText("It's good to see you");
        expect(outputText).toBeNull();
    })
})

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Test cases for Contact us page",() => {
    test("Should load contact us component page ", () => {

        render(<Contact/>);
        const heading = screen.getByRole("heading");
    
        //Assertion 
        expect(heading).toBeInTheDocument();    
    });
    
    test("Should load button on Contact us component", () => {
        render(<Contact/>);
        const button = screen.getByRole("button");
    
        //Assertion
        expect(button).toBeInTheDocument();
    });

    test("Should load input placeholder", () => {
        render(<Contact/>);

        const inputPlaceholder = screen.getByPlaceholderText("Name");

        expect(inputPlaceholder).toBeInTheDocument();
    });
    
    test("Should load 2 input boxes on the Contact component", () => {
    
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});

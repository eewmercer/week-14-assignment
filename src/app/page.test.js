import {fireEvent, render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom"
import HomePage from "./page"

test("test input state change with button click", async() => {
    render(<HomePage />)

    const inputElement = screen.getByPlaceholderText('1234');
    fireEvent.change(inputElement, {target: {value:'40'}});

    await userEvent.click(screen.getByRole("button"))

    const inputValue = screen.getByPlaceholderText('5678');
    expect(inputValue.value).toBe('40')
})
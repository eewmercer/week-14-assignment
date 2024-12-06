'use client'
import {useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userInput = e.target.elements.inputName.value;
    setInputValue(userInput)
  }

  return (
    <form className="submit-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userInput">Enter a number:</label>
          <input type="text" name="inputName" placeholder="1234"/>
        </div>
        <button type="submit">Submit</button>
        <div>
          <label htmlFor="inputValue">Is this your number?</label>
          <input type="text" readOnly value={inputValue} placeholder="5678"/>
        </div>
    </form>
  );
}

import { React, useState } from "react";
import { ChuckNorrisAPI } from "./ChuckNorrisAPI";

export const WordCount = () => {
  const [value, setValue] = useState("");

  async function handleChange(event) {
    setValue(event.target.value);
  }

  async function handleClear() {
    setValue('');
  }
  
  const characters = value.length;
  const words = value.trim().split(' ').filter(word => word.length > 0).length;
  return (
    <div>
      <h1>Word Count</h1>
      <main>
        <textarea
          rows="25"
          cols="100"
          placeholder="Enter words"
          value={value}
          onChange={handleChange}
        />
        <br />
        <button onClick={handleClear}>Clear</button>
        <br />
        <label>Characters : {characters}</label>
        <br />
        <label>Words : {words}</label>
        <section>
          <div>
            <ChuckNorrisAPI/>
          </div>
        </section>
      </main>
    </div>
  );
};

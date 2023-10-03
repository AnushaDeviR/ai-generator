"use client";
import { Textarea } from "@nextui-org/react";
import { useState } from "react";
export default function Home() {
  // set local state
  const [result, setResult] = useState("");
  const [prompt, setPrompt] = useState("");

  const generateResult = async (e) => {
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_prompt: prompt }),
      });

      const data = await response.json();
      console.log(
        "[CMD] 🐨 | file: page.js:20 | generateResult | code:",
        prompt
      );
      setResult(data.result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center font-mono text-4xl lg:flex">
        <h1>Is it complex?</h1>
      </div>
      <div className="flex mt-20 gap-10 w-9/12 items-center">
        <p>insert graph img here</p>
        <div className="w-9/12 flex-row items-center">
          <Textarea
            isRequired
            isClearable
            type="text"
            label="Check your code's complexity"
            size="lg"
            fullWidth
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="mt-10 content-end">
            <button onClick={generateResult}>Check</button>
          </div>
        </div>
      </div>
      {result && (
        <div className="mt-4">
          <p>{result}</p>
        </div>
      )}
    </main>
  );
}

"use client";
import { Textarea } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Image from "next/image";

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

      setResult(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const clearResult = (e) => {
    e.preventDefault();
    setPrompt("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-4xl lg:flex">
        <h1>Is it complex?</h1>
      </div>
      <div className="flex mt-20 gap-10 w-9/12 items-center">
        <div>
          <Image
            src="/time.svg"
            width={500}
            height={550}
            alt="Technology illustrations by Storyset"
          />
        </div>
        <div className="w-9/12 flex-row items-center">
          <Textarea
            isRequired
            isClearable
            type="text"
            label="Check your code's complexity"
            size="lg"
            fullWidth
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
          />
          <div className="mt-10 w-full flex justify-end gap-5">
            <button className="clear_button" onClick={clearResult}>
              Clear
            </button>
            <button className="check_button" onClick={generateResult}>
              Check
            </button>
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

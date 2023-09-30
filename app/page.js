"use client";
import { Button, Textarea } from "@nextui-org/react";
export default function Home() {
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
          />
          <div className="mt-10 content-end">
            <Button color="primary">Check</Button>
          </div>
        </div>
      </div>
    </main>
  );
}

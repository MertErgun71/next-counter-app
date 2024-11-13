"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-green-800 p-4 rounded-lg">
        <h1 className="text-2xl my-2">Counter</h1>
        <p className="text-xl my-2">{count}</p>
        <div>
          <button
            onClick={increase}
            className="bg-green-400 py-1 px-4 rounded-lg mx-1"
          >
            increase
          </button>
          <button
            onClick={decrease}
            className="bg-red-600 py-1 px-4 rounded-lg mx-1"
          >
            decrease
          </button>
        </div>
      </div>
    </div>
  );
}

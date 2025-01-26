"use client";

import React, { useState } from 'react'
import { Copy } from "lucide-react";

const text = () => {

    const [text, setText] = useState("");

    // Function to handle text change in the textarea
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    // Function to convert text to uppercase
    const convertToUpperCase = () => {
        setText(text.toUpperCase());
    };

    // Function to convert text to lowercase
    const convertToLowerCase = () => {
        setText(text.toLowerCase());
    };

    // Function to convert text to titleCase
    const toTitleCase = () => {
        setText(text.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "));
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(text).then(() => {
          console.warn("Text copied to clipboard!");
        }).catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    }
      

  return (
    <div className='mt-14'>
        <div className="relative mt-14 px-10">
            <textarea
                className="rounded-lg border-2 p-2 mt-10 h-48 w-full text-black border-black focus:border-royalblue focus:outline-none transition-all"
                name="userInput"
                id="userInput"
                placeholder="Enter your text here..."
                value={text}
                onChange={handleTextChange}
            ></textarea>
            <button
                onClick={copyToClipboard}
                className="absolute rounded-full top-12 right-12 p-2 text-royalblue hover:scale-105 hover:bg-royalblue hover:text-white transition-transform"
                aria-label="Copy to clipboard"
            >
                <Copy size={16} /> {/* Icon from Lucide */}
            </button>
        </div>

      <div className="flex gap-2 px-10 mt-5">
        <button className="rounded-lg bg-royalblue text-white p-2 hover:scale-105 transition-transform" onClick={convertToUpperCase}>UpperCase</button>
        <button className="rounded-lg bg-royalblue text-white p-2 hover:scale-105 transition-transform" onClick={convertToLowerCase}>LowerCase</button>
        <button className="rounded-lg bg-royalblue text-white p-2 hover:scale-105 transition-transform" onClick={toTitleCase}>TitleCase</button>
        <button className="rounded-lg bg-royalblue text-white p-2 hover:scale-105 transition-transform" onClick={copyToClipboard}>Copy</button>
        <button className="rounded-lg bg-royalblue text-white p-2 hover:scale-105 transition-transform" onClick={()=> setText("")}>Clear</button>
      </div>
    </div>
  )
}

export default text